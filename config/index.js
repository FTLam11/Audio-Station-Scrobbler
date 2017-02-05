'use strict';

let config = {};

config.port = 3000;
config.api_key = process.env.LFM_API_KEY;
config.apiSecret = process.env.LFM_SECRET;
config.sk = process.env.LFM_SESSION_KEY;

module.exports = config;
