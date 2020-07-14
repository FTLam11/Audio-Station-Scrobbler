const crypto = require('crypto');

// Hash the api signature
module.exports = function () {
  return (req, res, next) => {
    req.body.api_sig = crypto
      .createHash('md5')
      .update(req.body.api_sig, 'utf8')
      .digest('hex');
    next();
  };
};
