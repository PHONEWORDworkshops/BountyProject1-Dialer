var application_root = __dirname + '/../app';
var fs 		    = require('fs');
var express     = require("express");
var bodyParser  = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next){ console.log((new Date()), req.method, req.url); next(); });
app.use(express.static(application_root));
app.listen(8000, function(){
	console.log((new Date()), "http server listening on port: 8000");
});