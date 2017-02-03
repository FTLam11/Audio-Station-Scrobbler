'use strict';

const router = require('express').Router();
const authRouter = require('./auth/authRouter');

router.get('/', function(req, res) {
  res.send('Scrawble dat track jo!');
});

router.use('/auth', authRouter);

module.exports = router;