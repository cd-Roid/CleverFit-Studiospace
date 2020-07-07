const fetchData = require('./api-parser');
const sendTweet = require('./twitterBot');


setInterval(fetchData, 60 * 1000 * 60);
setInterval(sendTweet, 60 * 1000 * 60);

