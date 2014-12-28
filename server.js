/**
 * 
 */


var http = require('http');
var fs = require('fs');
var url = require('url');
var index = fs.readFileSync('index.html');

http.createServer(function (req,res)
		{
	
	var urlobj = url.parse(req.url,true,false);
	
	
	res.writeHead(200, {'Content-Type': 'text/html'});
	  res.end(index);
	  console.log(urlobj);
		}).listen(8080);

