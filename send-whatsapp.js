require('dotenv').config()
const scraperResponse = require('./puppeteer')
const client = require('twilio')( process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)


async function sendMessage() {
    try {
        client.messages.create({
            from: 'whatsapp: +19168238709',
            to: 'whatsapp: ' + process.env.MY_PHONE_NUMBER,
            body: 'hello'
        }).then(message => console.log(message.sid))
         
    } catch (error) {
        console.error(error);
    }
}


sendMessage()