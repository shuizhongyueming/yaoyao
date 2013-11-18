var http = require('http');

http.createServer(function(rq,rs){
    rs.writeHead(200,{'Content-Type':'text/html'});
    rs.write('Hello, World');
    rs.end();
}).listen(8080);
