'use strict';

const request = require('./src/util/request');
const config = require('./config');

// let callbackUrl = "http://localhost:3000"
// let apiAuthUrl = "http://www.last.fm/api/auth/?api_key=" + config.apiKey + "&cb=" + callbackUrl;
let apiRootUrl = "http://ws.audioscrobbler.com/2.0/";
let getTokenUrl = apiRootUrl + "?method=auth.gettoken&api_key=" + config.apiKey + "&format=json"
let authToken = '';

request.get(getTokenUrl)
  .then((data) => {
    console.log(data);
    return JSON.parse(data).token;
  })
  .then((token) => {
    console.log(token);
  })
  .catch((err) => {
    console.log(err);
  })