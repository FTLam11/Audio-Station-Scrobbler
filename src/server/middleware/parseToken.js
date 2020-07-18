// Parse request for Last.FM auth token
const validParams = function (queryObj) {
  return queryObj.api_key
             && queryObj.token
             && queryObj.secret;
};

module.exports = function () {
  return (req, res, next) => {
    if (validParams(req.query)) {
      req.body.api_key = req.query.api_key;
      req.body.method = 'auth.getSession';
      req.body.token = req.query.token;
      req.body.secret = req.query.secret;
      next();
    } else {
      next(new Error('Missing parameters for session request.'));
    }
  };
};
