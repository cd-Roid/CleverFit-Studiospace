const fetch = require("node-fetch").default;


async function getResponsr() {
  try {
    let link = await fetch('http://www.clever-fit.com/de-de/fitnessstudio-in-der-naehe/clever-fit-gummersbach/?type=3002');
    let response = await link.json()
    let peopleInGym = response.data.response.countCheckedInCustomer
    let outMsg = `Es sind ${peopleInGym} Leute am trainieren.`
    const fullMsg = 'Das FitnessStudio ist voll'
    console.log(outMsg)
  } catch (error) {
    console.error(error);
  }
}

getResponsr();
