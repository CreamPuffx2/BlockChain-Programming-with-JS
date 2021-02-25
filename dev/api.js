/* 블록체인 API */

const express = require('express');

const app = express();

app.get('/', function(req, res) {
  res.send('Hello, Coding JavaScript!');
});

app.listen(3000);
