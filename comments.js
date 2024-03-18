// Create web server
// Create a web server that's going to send a response of "Hello World" to any type of request that we get on the root URL of our server, which is just a slash.

// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with "Hello World" to all requests.
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});

// Listen on port 8000, IP defaults to
