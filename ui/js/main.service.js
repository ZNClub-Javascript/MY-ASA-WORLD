

// Main Controller : has widest scope compared to other controllers

'use strict';

app.service('mainService',
	function(){
		this.show = function(val){
			success("in service "+val);
			
		}
		
		this.addAppt=false;
		this.setAddAppt=function(val){this.addAppt=val;}
		
		this.loginShow=false;
		this.setLoginShow=function(val){this.loginShow=val;}
		
		
	
		this.navShow=false;
		
		this.about=false;
	
		this.navigation=false;
	
		
		
		
		
	}
);