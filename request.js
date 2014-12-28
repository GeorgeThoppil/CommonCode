/**
 * New node file
 */
//var url = require('url');
//var urlstring = 'http://george:killzon@host.com:80/reasource/path/?query=string#hash';
//var urlobj=url.parse(urlstring);
//console.log(urlobj);


var http = require('http');

var options = {
		hostname: 'localhost',
		port: '8080',
		path: '/index.html'	
}
console.log(options);
http.request(options);