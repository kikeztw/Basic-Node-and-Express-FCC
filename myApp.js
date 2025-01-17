
const bodyParser = require('body-parser');
var express = require('express');
var app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.use(function(req, res, next){
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
})
app.use('/public', express.static(__dirname + "/public"));



app.route('/name')
  .get(function(req, res){
    const { query  } = req;
    res.json({ name: `${query.first} ${query.last}` })
  })
  .post(function(req, res){
    const { body  } = req;
    res.json({ name: `${body.first} ${body.last}` })
  });
  

app.get('/:word/echo', function(req, res){
  const { params } = req;
  res.send({ echo: params.word });
});

const timeMiddleware = (req, res, next) => {
  req.time = new Date().toString();
  next();
};

app.get('/now', timeMiddleware, function(req, res, next){ 
  res.send({ 
    time: req.time 
  });    
});

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
