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
	

}
