var http= require('http');

var server=http.createServer(function(req,res){
	res.writeHead(200);
	res.end('Hello World http');
	
});
server.listen(8000);

console.log('hai');
