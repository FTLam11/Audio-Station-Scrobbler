'use strict';

const querystring = require('querystring');

let string = {};

// Stringify payload for track.scrobble and track.updateNowPlaying
module.exports = function() {
  return (req, res, next) => {
    req.body.dataString = querystring.stringify(req.body);
    next();
  };
};