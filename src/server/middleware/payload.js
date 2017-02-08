'use strict';

const config = require('../../../config');

let payload = {};

// payload.data = function(album, artist, method, track) {
//   return () => {
//     return {
//       album: album,
//       api_key: config.api_key,
//       artist: artist,
//       format: 'json',
//       method: method,
//       sk: config.sk,
//       timestamp: Math.floor(new Date() / 1000),
//       track: track
//     };
//   };
// };

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