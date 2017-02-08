'use strict';

const config = require('../../../config');

let payload = {};

payload.build = function() {
  return (req, res, next) => {
      req.body.album = album;
      req.body.api_key = config.api_key;
      req.body.artist = artist;
      req.body.format = 'json';
      req.body.method = method;
      req.body.sk = config.sk;
      req.body.timestamp = Math.floor(new Date() / 1000);
      req.body.track = track;
  };
};

payload.squish = function() {
  return (req, res, next) => {
    let raw = '';
    for (var key in req.body) {
      if (req.body.hasOwnProperty(key) && key != 'format' && key != 'secret') {
        raw += key + req.body[key];
      };
    };
    raw += req.body.secret;
    req.body.api_sig = raw;
    next();
  };
};

module.exports = payload;