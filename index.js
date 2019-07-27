// Hello World! を返すサーバ
const http = require('http');
const port = process.env.PORT;

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Hello Azure!");
}).listen(port);