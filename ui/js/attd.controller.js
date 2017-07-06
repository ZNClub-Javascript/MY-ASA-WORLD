// Scoreboard Controller : handles Scoreboard ops


'use strict';

app.controller('addAttdCtrl',
function($scope,$filter,$http){		
	
	
	
	$scope.attendance={
		
		'number':'',
		'date':'',
		'members':[]
	}
	
	
	
	$scope.addAttdFor=function(number){
		
		success(number);
		
		$scope.attendance.number=number.toString();
		
		$scope.attendance.members=[
		{'name':'Ker','present':true},
		{'name':'Ver','present':true},
		{'name':'Ber','present':true}
		
		];
		
		var fmtDate=$filter('date')(new Date(),"dd/MM/yy");
		
		$scope.attendance.date=fmtDate.toString();
		
		
	}
	
	
	$scope.toggle = function(name,event){
		success("toggle");
		
			
		//get name
		for (var i=$scope.attendance.members.length-1; i>=0; i--) {
			var el = angular.element(event.target);
			var className = el.attr("class");
			
			if($scope.attendance.members[i].name==name){								
				
				
				if(className=='fa fa-check'){
					el.removeClass('fa fa-check').addClass("fa fa-times");
					el.css("color","red");
					$scope.attendance.members[i].present=!$scope.attendance.members[i].present;
					success($scope.attendance.members[i].present);
					
				}
				else if(className=='fa fa-times'){
					el.removeClass('fa fa-times').addClass("fa fa-check");
					el.css("color","green");
					$scope.attendance.members[i].present=!$scope.attendance.members[i].present;
					success($scope.attendance.members[i].present);
				}
				
			}
		}
		
		
	}
}
);



app.controller('viewAttdCtrl',
function($scope,$filter,$http){		
		
}
);

