require('../../../env');

const payload = {};

// Build payload for track.scrobble and track.updateNowPlaying
payload.build = function () {
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
payload.squish = function () {
  return (req, res, next) => {
    let raw = '';

    Object.keys(req.body).forEach((key) => {
      if (key !== 'format' && key !== 'secret') {
        raw += key + req.body[key];
      }
    });

    if (req.body.secret) {
      raw += req.body.secret;
    } else {
      raw += process.env.SECRET;
    }

    req.body.api_sig = raw;
    next();
  };
};

module.exports = payload;
