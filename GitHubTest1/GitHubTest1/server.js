'use strict';
var http = require('http');
var port = process.env.PORT || 3000;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port, function () {
    console.log('Server Started On Port 3000!!!')
});
