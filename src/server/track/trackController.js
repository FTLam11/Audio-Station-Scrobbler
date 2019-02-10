'use strict';

const request = require('../../util/request');
const querystring = require('querystring');

let controller = {};

controller.create = (req, res, next) => {
  request.post(req.body.options, req.body.dataString)
    .then((lastfmres) => {
      res.json(lastfmres);
    })
    .catch((err) => {
      next(err);
    });
  // create a scrobbling queue, since NAS submits
  // lyric requests for the currently playing song
  // and the next song in playlist
  // Last.fm uses 4 minutes as the time interval for scrobbles
};

module.exports = controller;
