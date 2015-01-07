var express = require('express'),jade = require('jade');
var http = require('http');
var https = require('https');
var fs = require('fs');

var app = express();



var ipaddr  = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port    = process.env.OPENSHIFT_NODEJS_PORT || 8080;


app.use(express.static(__dirname + '/public'));
//app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 3000);
app.set('views', './views');
app.engine('jade', jade.__express);
//app.engine('html', require('ejs').renderFile);

app.set('view engine', 'jade');


app.get('/Projects',function(req,res)
		{
	res.render('Projects');
		});

app.get('/Contact',function(req,res)
		{
	res.render('Contact');
		
		});

app.get('/About',function(req,res)
		{
	res.render('About');
		
		});

app.get('/',function(req,res)
		{
		//res.send('Hello from main page');
		res.render('index');
		});


app.listen(port, ipaddr, function() {
	console.log('started');
		});
