# winston3-with-syslog-transport

This is just a sample implementation showing how messages can be passed to Papertrail from an app using winston3 and transport: winston-syslog. Consult a nodejs expert (very important) to make sure all the app messages you need are forwarded to your log server. I just read the docs from the packages being used.

## steps

- $ npm install
- $ cp .env.example .env
- replace papertrail url and port with your own
- $ node sample-logging.js

## relevant articles

- https://stackoverflow.com/questions/39114412/handle-errors-and-exceptions-logging-in-node-js
- https://github.com/winstonjs/winston#exceptions
