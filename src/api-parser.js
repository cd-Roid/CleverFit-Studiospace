const fetch = require("node-fetch").default;


module.exports = async function getResponse() {
  try {
    let link = await fetch('http://www.clever-fit.com/de-de/fitnessstudio-in-der-naehe/clever-fit-gummersbach/?type=3002');
    let response = await link.json();
    let peopleInGym = response.data.loadNumberOfPresentCustomersInPercent;
    //Theres a max of 42 people allowed in the gym.
    let calculatePeople = Math.floor(peopleInGym * 42);
    let outMsg = `Es sind ${calculatePeople} Leute am trainieren.`;
    return outMsg;
  } catch (error) {
    console.error(error);
  }
}

