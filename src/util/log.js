'use strict'

let log = {};

let logger = (method = 'log', string) => {
  if (method === 'error') {
    console.log(`[ ❌ scrawble ERROR ❌ ] ${string}`)
  } else {
    console.log(`[ ✨ scrawble LOG ✨ ] ${string}`);
  };
};

log.log = (string) => logger('log', string);

module.exports = log;