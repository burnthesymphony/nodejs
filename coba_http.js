var http =require('http');
PORT=1309;


var server=http.createServer(function(req,res){
	var getKeys = function(){
   var keys = [];
   for(var key in req){
      keys.push(key);
   }
   return keys;
}
	var body="<pre>SHOULD I LEARN NODE JS </pre>"+keys;

	res.writeHead(200,{
		 'Content-Length':body.length,
        'Content-Type':'text/html',
        'Pesan-Header':'Pengenalan Node.js'
	});
	console.log(res);
	res.write(body);
	res.end();

});


server.listen(PORT);
console.log("PORT "+PORT+" JALANIN NODE JS");