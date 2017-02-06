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
    req.body.api_signature = '';
    for (var key in req.body) {
      if (req.body.hasOwnProperty(key) && key != 'format' && key != 'secret') {
        req.body.api_signature += key + req.body[key];
      };
    };
    req.body.api_signature += req.body.secret;
    next();
  };
};

module.exports = payload;