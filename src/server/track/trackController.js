'use strict';

const request = require('../../util/request');
const querystring = require('querystring');

let controller = {};

// save necessary params to local var
// redirect to same track GET route
// create new controller action for updateNowPlaying
controller.create = (req, res, next) => {
  request.post(req.body.options, req.body.dataString)
    .then((lastfmres) => {
      res.redirect('/updateNowPlaying');
    })
    .catch((err) => {
      next(err);
    });
};

controller.updateNowPlaying = (req, res, next) => {
  request.post(req.body.options, req.body.dataString)
    .then((lastfmres) => {
      res.json(lastfmres);
    })
    .catch((err) => {
      next(err);
    });
};
module.exports = controller;
