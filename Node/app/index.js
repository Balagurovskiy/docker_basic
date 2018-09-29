
var http = require('http');// import http module

http.createServer(function (req, res) {// request and response auto paste by node.js
    res.writeHead(200, {'Content-Type': 'text/plain'});// set respose // ContType js object
    res.write('Hello World!');
    res.end();
}).listen(3030); // listen on port
