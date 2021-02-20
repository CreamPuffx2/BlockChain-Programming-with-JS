const express = require('express');
const app = express();

app.get('/blockchain', function(req, res) {
  res.end(200)
});

app.post('/transaction', function(req, res) {
  res.end(200)
});

app.get('/mine', function(req, res) {
  res.end(200)
});

app.listen(3000 ,function() {
  console.log('listening on port 3000...');
});