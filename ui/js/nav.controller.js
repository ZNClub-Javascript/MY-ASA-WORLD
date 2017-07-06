// Navigation controller : adds dynamic content to navigation main headings & redirection within app

'use strict';

app.controller('navCtrl',
function($scope){
 	
	$scope.clickOptions= function(op,name){
		success("clickOptions");
		success(op);
		success(name);
		
		if(op=='add' && name=='Appointment'){
			
			
			
		}
		
	}
	
	$scope.clickAppt= function(){
		$scope.navigation=true;
		$scope.option = {'name':'Appointment','options':['add','eval']};
	} 
	
	$scope.clickAttd= function(){
		$scope.navigation=true;
		$scope.option = {'name':'Attendance','options':['add','view']};
	} 
	
	
	$scope.clickScore= function(){
		$scope.navigation=true;
		$scope.option = {'name':'Scorecard','options':['add to','view']};
	} 
	
	
	

}
); 