// Appointment Controller : handles appt ops

app.controller('apptCtrl',
function($scope,$filter){		
	
	//$scope.apptDate;
	//ar time=$scope.apptTime;
	//ar names=$scope.apptNames;
	//var sign=$scope.apptSign;
	
	$scope.names=[];
	$scope.progress='Adding';
	$scope.times=false;
	
	this.isOpen = false;
	//$scope.apptDate=new Date().toLocaleString();
	
	//$scope.days=dayList();
	
	$scope.massTimes=["Mon","Tue","Wed"];
	
	$scope.showTimes=function(){
		$scope.times=true;
		$scope.apptTime=$scope.selectedTime;
		
	}
	
	$scope.addNames=function(){
		$scope.names.push($scope.apptName);
		$scope.apptName='';
	}
	
	$scope.removeName=function(name){
		success(name);
		
		for (var i=$scope.names.length-1; i>=0; i--) {
			if ($scope.names[i] === name) {
			$scope.names.splice(i, 1);
			break;
		}
}
		
	}
	

	
	
	$scope.setAppt=function(){
		//check username and password
		
		var fmtDate=$filter('date')($scope.apptDate,"dd/MM/yy");
		success(fmtDate);
		
		
		var status=addAppointment();
		
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
	
	
	$scope.addNames=function(){
		$scope.names.push($scope.apptName);
		$scope.apptName='';
	}
	
		
}
);
