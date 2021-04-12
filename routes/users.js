const express = require('express');

const app = express();

/* GET users listing. */
app.get('/', function (req, res, next) {
  res.json({ info: 'Get Users and display em' });
});

module.exports = app;
