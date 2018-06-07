var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var request     = require('request');
var http        = require('http');
var port        = 3333;

var hosts = [
'ec2-18-219-146-165.us-east-2.compute.amazonaws.com'
];
var keys = [];

function sendEm(id,msg){
        request.get({
                url: 'http://'+id+":3001/"+msg, // url synapse->mocky
        },
        function (error, response, body) {
        	if(error){
                	console.log(error);
                }
        });
}


app.put('/broke',function(req,res){
        keys.push(req);
        hosts.forEach(function(h){
                sendEm(h,"next");
        });
});

app.get('/start',function(req,res){
        res.send('Sending all nodes request to start');
        hosts.forEach(function(h){
                sendEm(h,"start");
        });
});

app.listen(port, function(){
        console.log('MANAGER now listening on port ' + port );
});
