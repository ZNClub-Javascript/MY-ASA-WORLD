// Login Controller : handles login ops

app.controller('loginCtrl',
function($scope,$http){
		
	$scope.loginObj={'status':true,'username':'','password':''};
	$scope.error={'username':false,'password':false};
	
	$scope.authenticate=function(){
		//check username and password
		console.log($scope.loginObj.username+" - "+$scope.loginObj.password);
		
		/* $http.get('/login').
        then(function(response) {
            //DO NOTHING
			
        });		 */	
		
		
		/* UI TEST */
		///*
		if($scope.loginObj.username=='zn' && $scope.loginObj.password=='zz')							
		{
			
			$scope.auth=true;
			$scope.loginObj.status=false;
			$scope.error.username=$scope.error.password=false;
			success("authentication");
			
			
		}
		else if($scope.loginObj.password=='zz'){
			
			$scope.error.password=false;
			$scope.error.username=true;
			error("authentication in username");
			
		}
		
		else if($scope.loginObj.username=='zn'){
			
			$scope.error.username=false;
			$scope.error.password=true;
			error("authentication in password");
			
		}
		else{
			$scope.error.username=true;
			$scope.error.password=true;
			error("authentication in username and password");
		}
		
		
		//*/
		
		/*
		$http.post('/login/auth',  { 'username' : $scope.loginObj.username,'password': $scope.loginObj.password}).
		then(function(response){
			//DO 
			
			success(response.data['result']);
			
			if(response.data['result']=='success'){
				
				$scope.auth=true;
				$scope.loginObj.status=false;
			
				success("authentication");
			}
			else{
				
								
				error("authentication");
			}
		});
			
		*/
		
	}
	
}
);
