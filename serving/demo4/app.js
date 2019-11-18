const express = require('express');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./health.js')(app);
require('./metrics.js')(app);

app.get('/', function(req, res) {
  res.send(`Hello ${process.env.TARGET || "World"}`)
});

module.exports.app = app;



