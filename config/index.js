'use strict';

let config = {};

config.port = 3000;
config.api_key = process.env.API_KEY;
config.apiSecret = process.env.SECRET;
config.sk = process.env.SK;

module.exports = config;
