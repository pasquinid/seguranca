var exec 	= require('child_process').exec, child;
const express 	= require('express');
const app 	= express();
const port 	= 3001;

var n 	= 1;

function start(){
	console.log('....');
        exec('forever start app.js',function(error,stdout,stderr){
                if(error !== null){
                        console.log("Erro "+error);
			return 0;
                }
		console.log("started");
        });
}

function next(){
        exec('forever stop app.js',function(err,stdo,stder){
	        exec('echo -n '+(n+1)+' > flag.txt',function(error,stdout,stderr){
		        exec('forever start app.js',function(erro,stdou,stde){
				if(!erro){
					console.log("next");
				}
			});
	        });
	});
}

app.get('/next',function(req,res){
	res.send('NEXT OK');
	next();
});

app.get('/start',function(req,res){
	res.send('STARTING');
	start();
});

app.listen(port, function(){
	console.log('Instance Aux now listening on port ' + port );
});
