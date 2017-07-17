// Attendance Controller : handles Attendance ops


'use strict';

app.controller('addAttdCtrl',
function($scope,$filter,$http){		
	
	// model
	
	$scope.attendance={
		
		'group':'',
		'date':'',
		'members':[]
	}
	
	// after selecting group
	
	$scope.addAttdFor=function(number){
						
		var fmtDate=$filter('date')($scope.attendance.date,"dd/MM/yy");	
		
		
		// GET names from group
		var url='/attendance/by?group='+number.toString()+'&date='+fmtDate;
		success(url);
		$http.get(url).
		then(function(response) {
		    //DO
			$scope.attendance.group=response.data['object']['group'];
			//$scope.attendance.date=response.data['object']['date'];
			//$scope.attendance.members=response.data['object']['members'];
			var dict=response.data['object']['members'];
			for(var key in dict){
//				success(key+" -> "+dict[key]);
				$scope.attendance.members.push({'name':key,'present':dict[key]});
			}
			
		//	success($scope.attendance.members[1].name+" has "+$scope.attendance.members[1].present);

		});	
		
		
		
		// ITERATE to INSERT Object into attendance.members
		/*
		$scope.attendance.members=[
		{'name':'Ker','present':true},
		{'name':'Ver','present':true},
		{'name':'Ber','present':true}
		
		];
		*/
		
		
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

			success(" "+key+" has "+membersMap[i].key);

		}

		// check map
		
		

		// POST attendance Object
		$http.post('/appointment/evaluate',  
		{ 
		'group' : $scope.attendance.group,
		'date' : $scope.attendance.date,		
		'members' : membersMap
		}).
		then(function(response,status){
			if(response.data['result']=='success'){
				success("POST success");		
			}
			else{
				error();
			}
		});
		
		
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

