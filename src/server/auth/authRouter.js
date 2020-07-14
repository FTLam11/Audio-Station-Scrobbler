const express = require('express');

const authRouter = express.Router();
const controller = require('./authController');
const parseToken = require('../middleware/parseToken');
const payload = require('../middleware/payload');
const sign = require('../middleware/signature');

authRouter.route(/\/q/)
  .get(parseToken(), payload.squish(), sign(), controller.session, controller.end);

module.exports = authRouter;
