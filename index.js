var express = require('express');
var app = express();
const randommine = require('./myrandommodule');
const { guessNum, storeNum } = require('./script');


let computerNum = 10;
let numTries;
let obj;



//request is info sending to server from client.
//response is info sending to client from server.
app.get("/",function(request,response){
	response.sendFile(__dirname + "/index.html");
    const store = new storeNum(0, 10)

});


app.get('/request', function(req, res){
    console.log("def called")
    let nums;
    
    nums = new guessNum(req.query.index);

    
    console.log("nums" + nums);
    res.json({"num":nums});
    
    
	
});



var port = process.env.PORT || 3000;

app.listen(port);