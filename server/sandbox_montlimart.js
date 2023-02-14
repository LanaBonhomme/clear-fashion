/* eslint-disable no-console, no-process-exit */
const montlimartbrand = require('./eshops/montlimartbrand');

async function sandbox (eshop = 'https://www.montlimart.com/98-sweats') {
  try {
    console.log(`🕵️‍♀️  browsing ${eshop} eshop`);

    const products = await montlimartbrand.scrape(eshop);

    console.log(products);
    console.log('done');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

const [,, eshop] = process.argv;

sandbox(eshop);