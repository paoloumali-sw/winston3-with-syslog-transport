const winston = require('winston');
require('winston-syslog').Syslog;

// if (process.env.NODE_ENV !== 'production') {
// ideally, in prod, these variables should already be available
  require('dotenv').config();
//2}

const syslogTransport = new winston.transports.Syslog({
  // a winston transport doesn't handle exceptions by default
  handleExceptions: true,
  // options offered by this custom transport
  host: process.env.PT_URL,
  port: process.env.PT_PORT,
  localhost: process.env.SYSLOG_HOSTNAME,
  app_name: process.env.SYSLOG_SERVICE_NAME
});

const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  transports: [
    syslogTransport
  ],
});

const date = new Date();
const time = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();

// adhoc logs
logger.error('some error');
logger.info('time of message: '+time);

// suddenly an exception
console.log(forceRefError);
