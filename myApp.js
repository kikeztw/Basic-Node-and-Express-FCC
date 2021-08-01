var express = require('express');
var app = express();



app.use(function(req, res, next){
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
})
app.use('/public', express.static(__dirname + "/public"));


app.route('/name')
  .get(function(req, res){
    const { query } = req;
    res.json({ name: `${query.first} ${query.last}` })
  })
  

app.get('/:word/echo', function(req, res){
  const { params } = req;
  res.send({ echo: params.word });
});

app.get('/now', 
  function(req, res, next){
    req.time = new Date().toDateString();
    next();
  },
  function(req, res, next){ 
    res.json({ time: req.time });    
  }
);

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
