package asa.controller;


import asa.bean.Attendance;
import asa.service.AttendanceService;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.MediaType;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.*;

@RestController
@RequestMapping("/attendance")
public class AttendanceController {

	@Autowired
	private AttendanceService attendanceService;
	
	
    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody Map<String,String> add(@RequestBody Attendance attendance){
        
		  Map<String,String> map=new HashMap<>();
		  if(attendanceService.add(attendance)){
      			map.put("result","success");
		  }
	    	else{
			map.put("result","failed");
		}
		  return map;
    }
	
	
	@RequestMapping(value="/by",method = RequestMethod.GET)
	public @ResponseBody Map<String,Object> viewByGroupAndDate(@RequestParam("group") String group,
								   @RequestParam("date") String date){
		Map<String,Object> map=new HashMap<>();
		System.out.println("Inside AttendanceController");
		Attendance attendance = attendanceService.get(group,date);
		
		
		if(attendance!=null){
			map.put("result",new String("success"));
			map.put("object",attendance);
		}
		else{
			map.put("result",new String("failed"));
		}
			
		return map;
	}
	

}
