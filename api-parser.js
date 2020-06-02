const fetch = require("node-fetch").default;


setInterval(getResponse, 1000*10);

async function getResponse() {
  try {
    let link = await fetch('http://www.clever-fit.com/de-de/fitnessstudio-in-der-naehe/clever-fit-gummersbach/?type=3002');
    let response = await link.json()
    let peopleInGym = response.data.response.countCheckedInCustomer
    let outMsg = `Es sind ${peopleInGym} Leute am trainieren.`
    
    console.log(outMsg);
    module.exports = outMsg
  } catch (error) {
    console.error(error);
  }
}

