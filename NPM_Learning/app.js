var express = require('express')
var app = express();  
var path = require('path');  //for sending file
var routes = require('./routes');

app.set('port',3000);  //if you don't set this, express will pick an empty port

//defining static assets, use() is Express middleware; sits between req and response
app.use(/*'/css',*/ function(req,res,next){   //specify logging for requests to css dir
    console.log(req.method, req.url);
    next();
});
app.use(express.static(path.join(__dirname,'public')));  //finds index.html by default
app.use('/api',routes);  //hooking up 'routes' routes, puts api in the URL, http://localhost:3000/api/json

/*
app.get('/',function(req, res){  //req = request object, res = response
    console.log('GET homepage');
    res.status(200);
    res.sendFile(path.join(__dirname,'public/index.html'));  //express helper method, furnishes homepage to browser
});
*/

app.get('/json',function(req, res){  //req = request object, res = response
    console.log('GET json');
    res.status(200);
    res.json({'jsonData':true});  //another express helper method
});

/* a couple of test routes
app.get('/file',function(req, res){  //req = request object, res = response
    console.log('GET file');
    res.status(200);
    res.sendFile(path.join(__dirname, 'app.js'));  //another express helper method
});

app.get('/groose',function(req, res){  //req = request object, res = response
    console.log('GET groose');
    res.status(200);
    res.sendFile(path.join(__dirname, 'groose.jpg'));  //another express helper method
});
*/

var server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log('Magic happens on port ' + port);  //runs asynchronously
});

console.log('Me first!');  //because server is async, this executes before the other console log

