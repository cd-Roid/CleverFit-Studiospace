const puppeteer = require("puppeteer");
const dotenv = require("dotenv").config();

async function scrapeWorkload(url) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [element] = await page.$x(
      "/html/body/div[1]/div/div[2]/main/div/div[2]/section/div/div/div/div/div[2]/div[3]/div/div[2]"
    );
    const src = await element.getProperty("textContent");
    const srcText = await src.jsonValue();

      console.log(await {srcText});
    
    module.exports = srcText;
  } catch (error) {
    console.error(error);
  }
}

scrapeWorkload(
  "https://www.clever-fit.com/de-de/fitnessstudio-in-der-naehe/clever-fit-gummersbach/"
);
