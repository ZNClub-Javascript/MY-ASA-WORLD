package asa.controller;

import asa.bean.Appointment;
import asa.service.AppointmentService;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;

@RestController
@RequestMapping("/appointment")
public class AppointmentController {

	@Autowired
	private AppointmentService appointmentService;
	
	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody Map<String,Object> view(){
		Map<String,String> map=new HashMap<>();
		System.out.println("Inside AppointmentController");
		List<Appointment> list= appointmentService.get();
		System.out.println("Length :"+list.size());
		
		if(list.size()==0){
			map.put("result",new String("success"));
			map.put("list",list);
		}
		else{
			map.put("result",new String("failed"));
		}
			
		return map;
	}
	
    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody Map<String,String> add(@RequestBody Appointment appointment){
        
		  Map<String,String> map=new HashMap<>();
		  if(appointmentService.add(appointment)){
      			map.put("result","success");
		  }
	    	else{
			map.put("result","failed");
		}
		  return map;
    }
	/*
	@RequestMapping(value="/test",method = RequestMethod.GET)
    public @ResponseBody Map<String,String> addTest(){
        	System.out.println("Inside AppointmentController POST TEST");
		  
	    	Map<String,String> map=new HashMap<>();
		  if(appointmentService.add(appointment)){
      			map.put("result","success");
		  }
	    	else{
			map.put("result","failed");
		}
		  return map;
    }
	*/
	
	
	
	

}
