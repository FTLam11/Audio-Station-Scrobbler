'use strict'

module.exports = () => {
  return function(err, req, res, next) {
    if (err) {
      console.log(err.stack);
      res.status(500).send(err);
    }
  };
};