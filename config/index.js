'use strict';

let config = {};

config.port = 3000;
config.apiKey = process.env.LFM_API_KEY;
config.apiSecret = process.env.LFM_SECRET;

module.exports = config;
