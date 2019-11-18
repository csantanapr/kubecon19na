const express = require('express');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.send(`Hello ${process.env.TARGET || "<a href=https://appsody.dev target=_blank>appsody.dev</a>"}`)
});

module.exports.app = app;



