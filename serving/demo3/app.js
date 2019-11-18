const express = require('express');
const logger = require('./logger.js');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./health.js')(app);
require('./metrics.js')(app);

app.get('/', function(req, res) {
  logger.info('this is a log message for kubecon')
  res.send(`Hello ${process.env.TARGET || "World"}`)
});

module.exports.app = app;



