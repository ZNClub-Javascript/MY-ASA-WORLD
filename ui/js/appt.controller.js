// Appointment Controller : handles appt ops

app.controller('apptCtrl',
function($scope,$filter){		
		
	$scope.types=['Regular','Special'];
	
	$scope.progress='Adding';
	$scope.times=false;
	
	this.isOpen = false;
	
	$scope.addNames=function(){
		$scope.names.push($scope.apptName);
		$scope.apptName='';
		success("addName");
	}
	
	$scope.timings=function(){
		
		success($scope.apptTime);
		
		if($scope.apptTime==''){
			$scope.massTime.show=false;
		}
		else{
			$scope.massTime.show=true;
			
			$scope.massTime.timeList=['a','b','c','ad','be','bcd'];
		}
	}
	
	$scope.updateApptTime = function(){
		success($scope.massTime.selectedTime+" vs the "+$scope.apptTime);
		$scope.apptTime = $scope.massTime.selectedTime;
	}
	
	
	$scope.removeName=function(name){
		
		for (var i=$scope.names.length-1; i>=0; i--) {
			if ($scope.names[i] === name) {
				$scope.names.splice(i, 1);
				success("removeName");
				break;
			}
		}
		
	}
	
	$scope.setAppt=function(){
		//check username and password
		
		var fmtDate=$filter('date')($scope.apptDate,"dd/MM/yy");
		success(fmtDate);
		
		
		var status=true;
		
		//true then set auth to true
		if(status==true){
			
			$scope.names=[];
			success("appt");
			$scope.progress='Added';
		}
		else{
			error("appt");
		}
	}
		
}
);
