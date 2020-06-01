require('dotenv').config()
const scraperResponse = require('./puppeteer')


const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;


const client = require('twilio')( accountSid, authToken)
async function sendMessage() {
    
    try {
        client.messages.create({
            from: 'whatsapp: +14155238886',
            to: 'whatsapp:' +process.env.MY_PHONE_NUMBER,
            body: scraperResponse
        }).then(message=>console.log(scraperResponse))
         
    } catch (error) {
        console.error(error);
    }
}


sendMessage()