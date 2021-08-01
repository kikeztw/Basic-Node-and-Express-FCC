var express = require('express');
var app = express();


app.get('/file', function(req, res){
  const fileDir = __dirname + '/views/index.html';
  res.sendFile(fileDir);
});

app.get('/', function(req, res){
  res.send('Hello Express');
});
































 module.exports = app;
