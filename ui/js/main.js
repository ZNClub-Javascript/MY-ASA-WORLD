console.log("Welcome to main.js");


// init function

var app=angular.module('ASA',['ngMaterial', 'ngMessages']);

function success(mod){console.log("Successfully executed!! #"+mod);}
function error(mod){console.log("Oops...Something went wrong!! #"+mod);}
function alertLogin(scope){
	//alert(scope.loginObj.status);
	
	//for test env only
	
	///*
	return true;
	//*/
	if(scope.loginObj.status){
		alert("Please login using your username & password");		
		return false;
	}
	else{
		return true;
	}
}

