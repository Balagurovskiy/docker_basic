var http = require('http');// import http module
var fs = require('fs');//// import file sys module

const PORT=3030; 

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  // request and response - auto paste by node.js
        response.writeHeader(200, {"Content-Type": "text/html"});  // set respose // ContType js object
        response.write(html);  
        response.end();  
    }).listen(PORT); // listen on port
});
