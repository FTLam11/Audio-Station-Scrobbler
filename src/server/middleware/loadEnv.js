'use strict';

module.exports = function() {
  return (req, res, next) => {
    require('../../../env.js');
    res.json("Time to listen to some tunes j0.");
  };
};