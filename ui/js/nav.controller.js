// Navigation controller : adds dynamic content to navigation main headings & redirection within app

'use strict';

app.controller('navCtrl',
function($scope,$rootScope){
 	
	$scope.clickOptions= function(op,name){
		
		if(op=='add' && name=='Appointment'){
			
			$rootScope.addAppt=!$rootScope.addAppt;
			
			$rootScope.evalAppt=false;
			$rootScope.loginShow=false;
		}
		else if(op=='evaluate' && name=='Appointment'){
			
			$rootScope.evalAppt=!$rootScope.evalAppt;
			
			$rootScope.addAppt=false;
			$rootScope.loginShow=false;
			
		}
		
	}
	
	$scope.clickAppt= function(){
		$scope.navigation=true;
		$scope.option = {'name':'Appointment','options':['add','evaluate']};
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