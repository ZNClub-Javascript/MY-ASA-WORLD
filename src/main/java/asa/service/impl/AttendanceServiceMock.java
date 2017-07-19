package asa.service.impl;

import asa.service.ConstantsInterface;
import asa.service.AttendanceService;
//import asa.dao.ScheduleDAO ;
import asa.bean.Attendance;
//import asa.model.Schedule;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.BeanUtils;
import java.util.*;


@Service("attendanceService")
public class AttendanceServiceMock implements ConstantsInterface,AttendanceService{
	
	
	public boolean add(Attendance attendance){
		
		return true;		
 
	}
	
	public Attendance get(String group,String date){
		
		Map<String,Boolean> members= new HashMap<>();
		
		// set default value as true

		members.put("Ker",Boolean.TRUE);
		members.put("Ver",Boolean.TRUE);
		members.put("Ber",Boolean.TRUE);
		
		return new Attendance("1","30/06/17",members);
		
    
	}
}
