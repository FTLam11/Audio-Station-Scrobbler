'use strict';

const router = require('express').Router();
const authRouter = require('./auth/authRouter');
const trackRouter = require('./track/trackRouter');

router.get('/', function(req, res) {
  res.send(`Your token is ${req.query.token}. Scrawble dat track j0!`);
});

router.use('/auth', authRouter);

router.use('/scrobbles', trackRouter);

module.exports = router;