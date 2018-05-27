var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('\nHello World\n');
});
console.log("Server listening @ 8080 port ...");
server.listen(8080);
