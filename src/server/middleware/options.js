// Set options for POST request to Last.FM
module.exports = function () {
  return (req, res, next) => {
    req.body.options = {
      hostname: 'ws.audioscrobbler.com',
      path: '/2.0/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(req.body.dataString),
      },
    };
    next();
  };
};
