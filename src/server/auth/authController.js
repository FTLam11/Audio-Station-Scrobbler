const request = require('../../util/request');
const url = require('../../util/urlBuilder');
const saveToEnv = require('../../util/envStore');

const controller = {};

controller.session = (req, res, next) => {
  request.get(url(req.body)())
    .then((lastfmres) => {
      const json = JSON.parse(lastfmres);
      saveToEnv('api_key', req.body.api_key)();
      saveToEnv('secret', req.body.secret)();
      saveToEnv('sk', json.session.key)();
      next();
    })
    .catch((err) => {
      next(err);
    });
};

controller.end = (req, res, next) => {
  res.json('Time to listen to some tunes j0.');
};

module.exports = controller;
