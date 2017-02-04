'use strict';

const request = require('./src/util/request');
const config = require('./config');
const crypto = require('crypto');

let apiRootUrl = "http://ws.audioscrobbler.com/2.0/";
let getTokenUrl = apiRootUrl + "?method=auth.gettoken&api_key=" + config.apiKey + "&format=json";
let getSessionUrl = apiRootUrl + "?method=auth.getSession";
let rawSignature = '';
let auth = {};

// request unauthorized request token for API account
request.get(getTokenUrl)
  .then((data) => {
    // console.log(data);
    // auth tokens are valid for 60 mins
    // user needs to authorized application access for token to be valid
    auth.token = JSON.parse(data).token;
    return auth.token;
  })
  .then((token) => {
    // generate signature
    rawSignature = "api_key" + config.apiKey + "methodauth.getSession" + "token" + token + config.apiSecret;
    // console.log(rawSignature);
    return rawSignature;
  })
  .then((signature) => {
    //hash the signature using md5
    auth.signedSignature = crypto
      .createHash('md5')
      .update(signature, 'utf8')
      .digest('hex')
    // console.log(auth);
    return auth.signedSignature;    
  })
  .then((hash) => {
    request.get(getSessionUrl + "&token=" + auth.token + "&api_key=" + config.apiKey + "&api_sig=" + hash)
      .then((session) => {
        console.log(session);
        auth.sessionKey = session;
        console.log("Auth is ", auth);
      })
      .catch((err) => console.log(err))
  })
  .catch((err) => {
    console.log(err);
  })

request.get(getSessionUrl + "&token=fe114c7ef0dffb638be8a448b84d1d23" + 
  "&api_key=" + config.apiKey + "&api_sig=a01a71384e24a6062f5f9ea926074de6" + "&format=json")
  .then((session) => {
    console.log(session);
    auth.sessionKey = session;
    console.log("Auth is ", auth);
  })
  .catch((err) => console.log(err))

  module.exports = auth;