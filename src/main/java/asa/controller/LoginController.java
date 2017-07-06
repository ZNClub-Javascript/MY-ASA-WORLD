package asa.controller;

import asa.bean.Login;
import asa.service.LoginService;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;

@RestController
@RequestMapping("/login")
public class LoginController {

	@Autowired
	private LoginService loginService;
	
	@RequestMapping(method = RequestMethod.GET)
	public void test(){
		System.out.println("Inside LoginController");
	}
	
    @RequestMapping(value="/auth",method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody Map<String,String> authenticateUser(@RequestBody Login login){
        System.out.println(login.getUsername());
		Map<String,String> map=new HashMap<>();
		/* 
	    	if(loginService.authenticate(login.getUsername(),login.getPassword())){
			//return "{'result':'success'}";
			map.put("result","success");
		}
		else{
			//return "{'result':'failure'}";
			map.put("result","failure");
		}
		*/
	    try{
	    	map.put("result",loginService.authenticate(login.getUsername(),login.getPassword()));
	    }
	    catch(Exception e){
	    	System.out.println("Exception at LoginController.authenticateUser() "+e);
		map.put("result","password");
	    }
	    finally{
		return map;
	    }
    }
	
	

}
