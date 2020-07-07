const apiFetch = require('./api-parser');
const Twitter = require('twitter');
const config = require('./config');


let bot = new Twitter(config);


module.exports = async function postTweet() {
  let message = await apiFetch();

  bot.post('statuses/update', { status: `${message}` },
    (err) => {
      if (err) {
        console.log(err);

      } else {
        console.log(`Tweeted ${message}. Check ${'https://twitter.com/roidcc'}`);
      }

    }
  );

}


