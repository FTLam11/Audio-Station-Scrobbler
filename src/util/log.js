'use strict'

let log = {};

let logger = (method, string) => {
  if (method === 'error') {
    console.log(`[ ❌ scrawble ERROR ❌ ] ${string}`)
  } else {
    console.log(`[ ✨ scrawble LOG ✨ ] ${string}`);
  };
};

log.log = (string) => logger('log', string);
log.error = (string) => logger('error', string);

module.exports = log;