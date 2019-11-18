const { createLogger, format, transports } = require('winston');

if (process.env.NODE_ENV !== 'production') {
  myTransports = [
    new transports.Console({
      format: format.combine(

        format.prettyPrint(), format.colorize()
      )
    })];
}

module.exports = createLogger({
  level: 'info',
  format: format.json(),
  transports: [new transports.Console()]
});

