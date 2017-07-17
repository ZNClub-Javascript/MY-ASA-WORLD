// Attendance Controller : handles Attendance ops


'use strict';

app.controller('addAttdCtrl',
function($scope,$filter,$http){		
	
	// model
	
	$scope.attendance={
		
		'number':'',
		'date':'',
		'members':[]
	}
	
	// after selecting group
	
	$scope.addAttdFor=function(number){
		
		//success(number);
		
		// GET names from group
		
		$scope.attendance.number=number.toString();
		
		//var fmtDate=$filter('date')(new Date(),"dd/MM/yy");	
		//$scope.attendance.date=fmtDate.toString();
		
		// ITERATE to INSERT Object into attendance.members
		
		$scope.attendance.members=[
		{'name':'Ker','present':true},
		{'name':'Ver','present':true},
		{'name':'Ber','present':true}
		
		];
		
		
		// END
		
	}
	
	
	$scope.toggle = function(name,event){
		//success("toggle");
		
			
		// SEARCH Object Using member.name
		
		for (var i=$scope.attendance.members.length-1; i>=0; i--) {
			
			var el = angular.element(event.target);
			var className = el.attr("class");
			
			// CHECK NAME
			if($scope.attendance.members[i].name==name){

				// TO MARK ABSENT
				if(className=='fa fa-check'){
					el.removeClass('fa fa-check').addClass("fa fa-times");
					el.css("color","red");
					$scope.attendance.members[i].present=!$scope.attendance.members[i].present;
					success($scope.attendance.members[i].present);
					
				}
				
				// TO MARK PRESENT
				else if(className=='fa fa-times'){
					el.removeClass('fa fa-times').addClass("fa fa-check");
					el.css("color","green");
					$scope.attendance.members[i].present=!$scope.attendance.members[i].present;
					success($scope.attendance.members[i].present);
				}
				
				break;
			}
		}				
	}
	
	$scope.addAttendance = function(){
		
		var membersMap=[];
		
		console.log($scope.attendance.members.length);
		
		// generate map
		for(var i=0; i< $scope.attendance.members.length ;i++){
			
			var key=$scope.attendance.members[i].name;
			var value=$scope.attendance.members[i].present;

			membersMap.push(
			{key:value}
			);

			success(" "+key+" has "+membersMap[key]);

		}

		// check map
		success("map is :"+membersMap[1]);
		

		// POST attendance Object
		$http.post('/appointment/evaluate',  
		{ 
		'group' : $scope.attendance.group,
		'date' : $scope.attendance.date,		
		'members' : membersMap
		}).
		then(function(response,status){
			success("POST success");			
		});
		
		error("ended");
	}
	
	
	
	
}
);



app.controller('viewAttdCtrl',
function($scope,$filter,$http){		
	
	$scope.attendance={
		
		'number':'',
		'date':'',
		'members':[]
	}
	
	$scope.viewAttdFor=function(number){
		
		//success(number);
		
		$scope.attendance.number=number.toString();
		
		$scope.attendance.members=[
		{'name':'Ker','present':false},
		{'name':'Ver','present':true},
		{'name':'Ber','present':true}
		
		];
		
		
		
	}
}
);

