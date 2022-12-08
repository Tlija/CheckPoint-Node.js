console.log('hello Word');
var http = require("http");
http.createServer(function (request, response) {
   
    response.writeHead(200, {'Content-Type': 'text/html'});

    response.end('hello word');
    
 }).listen(3000);
 
 console.log('Server running at http://127.0.0.1:3000');

 var fs = require("fs");

fs.readFile('welcome.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");
