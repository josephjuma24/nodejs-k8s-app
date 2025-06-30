var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World from Node.js on Kubernetes!');
});

app.get('/will', function (req, res) {
  res.send('{ "response": "Hello World" }');
}); 

app.get('/ready', function (req, res) {
  res.send('{ "response": " Graet!, It works!" }');
}); 
app.listen(Process.env.PORT || 3000);
module.exports = app;
