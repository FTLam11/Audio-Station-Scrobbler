const log = {};

const logger = (method, string) => {
  if (method === 'error') {
    console.error(`[ ❌ scrawble ERROR ❌ ] ${string}`);
  } else {
    console.log(`[ ✨ scrawble LOG ✨ ] ${string}`);
  }
};

log.log = (string) => logger('log', string);
log.error = (string) => logger('error', string);

module.exports = log;
