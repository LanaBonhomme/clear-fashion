/* eslint-disable no-console, no-process-exit */
const circlesportswearbrand = require('./eshops/circlesportswearbrand');

const link = [
  'https://shop.circlesportswear.com/collections/collection-femme'
]

async function sandbox (eshop = undefined, number = -1) {
  if(number == -1 && eshop == undefined)
  {
    var allProducts = [];
    for(var i = 0; i < link.length; i++)
    {
      allProducts.push(...await sandbox(link[i], i));
    }
    const fs = require('fs');
 
    let data = JSON.stringify(allProducts);
    fs.writeFileSync('products.json', data);
    console.log("Products in the json file: " + allProducts.length);
    process.exit(0);
  }

  else{
    try {
      console.log(`🕵️‍♀️  browsing ${eshop} eshop`);

      const products = await circlesportswearbrand.scrape(eshop);

      console.log(products);
      console.log('done');
      process.exit(0);
    } catch (e) {
      console.error(e);
      process.exit(1);
    }
  }
}

const [,, eshop] = process.argv;

sandbox(eshop);