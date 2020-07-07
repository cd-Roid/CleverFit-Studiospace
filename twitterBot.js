const apiFetch = require('./api-parser');
const config = require('./config');
const Twitter = require('twitter');

const bot = new Twitter(config);

console.log(apiFetch);
let message = apiFetch;
bot.post('statuses/update', message, () => { console.log(`Tweeted ${message}. Check ${'https://twitter.com/roidcc'}`) });

