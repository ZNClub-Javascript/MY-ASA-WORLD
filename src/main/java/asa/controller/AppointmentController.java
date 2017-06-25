package asa.controller;

import asa.bean.Appointment;
import asa.service.AppointmentService;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;

@RestController
@RequestMapping("/appt")
public class AppointmentController {

	@Autowired
	private AppointmentService appointmentService;
	
	@RequestMapping(method = RequestMethod.GET)
	public void view(){
		System.out.println("Inside AppointmentController");
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
	
	

}
