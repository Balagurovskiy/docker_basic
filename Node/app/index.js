/*var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});*/


var http = require('http');// import http module

http.createServer(function (req, res) {// request and response auto paste by node.js
    res.writeHead(200, {'Content-Type': 'text/plain'});// set respose // ContType js object
    res.write('Hello World!');
    res.end();
}).listen(3030); // liste on port