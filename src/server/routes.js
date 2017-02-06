'use strict';

const router = require('express').Router();
const authRouter = require('./auth/authRouter');
const trackRouter = require('./track/trackRouter');

router.get('/', function(req, res) {
  res.send('Scrawble dat track jo!');
});

router.use('/auth', authRouter);

router.use('/tracks', trackRouter);

module.exports = router;