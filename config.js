const dotenv = require('dotenv').config();

export const consumer_key = process.env.TWITTER_API_KEY;
export const consumer_secret = process.env.TWITTER_SECRET_KEY;
export const access_token_key = process.env.TWITTER_ACCESS_TOKEN;
export const access_token_secret = process.env.TWITTER_ACCESS_TOKEN_SECRET;
