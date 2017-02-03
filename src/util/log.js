'use strict'

let logger = (method, string) => {
  if (!console || !console[method]) return;
  if (method === 'error') {
    console[error](`[ ❌ scrawble ERROR ❌ ] ${string}`)
  } else {
    console[method](`[ ✨ scrawble LOG ✨ ] ${string}`);
  };
};

let log = (string) => logger('log', string);
log.error = (string) => logger('error', string);

module.exports = log;