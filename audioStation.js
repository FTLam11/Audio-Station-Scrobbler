'use strict';

const Syno = require('syno');

let connection = new Syno({
  protocol: 'http',
  host: '192.168.2.3',
  port: '5000',
  account: process.env.USER,
  passwd: process.env.MIMA2,
  apiVersion: '6.0.2'
});

connection.as.searchSong({'title': 'bowling girl'}, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});