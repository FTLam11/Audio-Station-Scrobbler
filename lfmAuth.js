'use strict';

const request = require('./src/util/request');
const config = require('./config');
const crypto = require('crypto');

let apiRootUrl = "http://ws.audioscrobbler.com/2.0/";
let getTokenUrl = apiRootUrl + "?method=auth.gettoken&api_key=" + config.apiKey + "&format=json"
let rawSignature = '';
let auth = {};

// request unauthorized request token for API account
request.get(getTokenUrl)
  .then((data) => {
    console.log(data);
    // auth tokens are valid for 60 mins
    return JSON.parse(data).token;
  })
  .then((token) => {
    // generate signature
    rawSignature = "api_key" + config.apiKey + "methodauth.getSession" + "token" + token + config.apiSecret;
    console.log(rawSignature);
    return rawSignature;
  })
  .then((signature) => {
    //hash the signature using md5
    auth.signedSignature = crypto
      .createHash('md5')
      .update(signature, 'utf8')
      .digest('hex')
    console.log(auth);    
  })
  .catch((err) => {
    console.log(err);
  })

  module.exports = auth;