const randommine = require('./myrandommodule');
let computerNum = 10;
let numTries;
let obj;

exports.storeNum = function(minValue,maxValue) {
	
	obj = new randommine(minValue,maxValue);
	computerNum = obj.random();
	
	numTries = 0;
}

exports.guessNum = function(guess) {
	let retVal = 0;
	if (guess < computerNum) {
		console.log("Choose a bigger number");
		retVal = -1;
	} else if (guess > computerNum){
		console.log("Choose a smaller number");
		retVal = 1;
	} else {
		console.log("You won");
		retVal = 0;
	}
	
	return(retVal);
}

exports.getNumTries = function() {
	return(numTries);
}