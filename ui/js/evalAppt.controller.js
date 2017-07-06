// Evaluate Appointment controller : evaulation of appointments directly or from database

'use strict';

app.controller('evalApptCtrl',
function($scope,$filter,$http){
 	
	$scope.clickDirectEvalAppt = function(){
		success("direct");
	}
	
	$scope.clickAppEvalAppt = function(){
		success("app");
	}

}
); 