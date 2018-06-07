var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var request     = require('request');
var http        = require('http');
var port        = 3333;

var hosts = [
'ec2-18-219-146-165.us-east-2.compute.amazonaws.com', // 1
'ec2-18-218-179-80.us-east-2.compute.amazonaws.com', // 2
'ec2-52-14-108-177.us-east-2.compute.amazonaws.com', // 3
'ec2-18-218-152-210.us-east-2.compute.amazonaws.com', // 4
'ec2-52-15-131-209.us-east-2.compute.amazonaws.com', // 5
'ec2-18-191-21-9.us-east-2.compute.amazonaws.com', // 6
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
