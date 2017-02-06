'use strict';

module.exports = function(body) {
  return () => {
    return `http://ws.audioscrobbler.com/2.0/?method=auth.getSession&token=${body.token}&api_key=${body.api_key}&api_sig=${body.api_sig}&format=json`
  };
};