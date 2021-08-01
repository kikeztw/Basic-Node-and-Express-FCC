var express = require('express');
var app = express();

app.use('/public', express.static(__dirname + "/public"));


app.get('/json', function(req, res){
  const isUpperCase = process.env.MESSAGE_STYLE === 'uppercase';
  const message = 'Hello json';
  res.json({ message:  isUpperCase ? message.toUpperCase() : message })
});

app.get('/file', function(req, res){
  const fileDir = __dirname + '/views/index.html';
  res.sendFile(fileDir);
});

app.get('/', function(req, res){
  res.send('Hello Express');
});
































 module.exports = app;
