var express = require('express');
var app = express();
var PORT = 3030
// app.get('/',function(req,res){
// 	res.send('Hello Express!');
// });
var middleware = require('./middleware.js');
app.use(middleware.logger);
//app.use(middleware.requireAuthentication);
app.get('/about',middleware.requireAuthentication,function(req,res){
	res.send('About page!');
});
app.use(express.static(__dirname + '/public'));
//console.log(__dirname);
app.listen(PORT, function(){
	console.log("server is started" + PORT + "!");
});
