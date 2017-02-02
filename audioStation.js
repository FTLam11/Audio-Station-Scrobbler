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

let req = (err, data) => {
  if (err) {
    console.log("Error: \n", err);
  } else {
    console.log("Received the following data:\n", data);
  }
};

connection.as.searchSong({'title': 'bowling girl'}, req);

// listen for requests by AudioStation
// or web scrape
// or create own music player