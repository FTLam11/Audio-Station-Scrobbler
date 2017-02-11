'use strict';

require('../../../env');

let payload = {};

// Build payload for track.scrobble and track.updateNowPlaying
payload.build = function() {
  return (req, res, next) => {
    req.body.api_key = process.env.API_KEY;
    req.body.artist = req.query.artist;
    req.body.format = 'json';
    req.body.method = 'track.scrobble';
    req.body.sk = process.env.SK;
    req.body.timestamp = Math.floor(new Date() / 1000);
    req.body.track = req.query.title;
    next();
  };
};

// Concatenate payload into raw api signature
payload.squish = function() {
  return (req, res, next) => {
    let raw = '';

    for (var key in req.body) {
      if (req.body.hasOwnProperty(key) && key != 'format' && key != 'secret') {
        raw += key + req.body[key];
      };
    };

    if (req.body.secret) {
      raw += req.body.secret;
    } else {
      raw += process.env.SECRET;
    };

    req.body.api_sig = raw;
    next();
  };
};

module.exports = payload;