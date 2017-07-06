

app.service('clickAddAppt',function($scope){
	this.show=function($scope){
		$scope.addAppt=true;	
		$scope.loginShow=false;
	}
});