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
		{'name':'Ker','score':'90','present':false},
		{'name':'Ver','score':'90','present':false},
		{'name':'Ber','score':'90','present':false},
		
		];
		
		var fmtDate=$filter('date')(new Date(),"dd/MM/yy");
		
		$scope.attendance.date=fmtDate.toString();
		
		
	}
}
);



app.controller('viewAttdCtrl',
function($scope,$filter,$http){		
		
}
);

