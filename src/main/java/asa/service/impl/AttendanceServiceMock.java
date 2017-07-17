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
	
	public List<Attendance> get(String group,String date){
		List<Appointment> list = new ArrayList<>();
		
		
		list.add(new Appointment(names,"30/06/17","06:00 AM","Admin","Regular"));
		list.add(new Appointment(names,"30/06/17","07:00 AM","Admin","Regular"));
		list.add(new Appointment(names,"30/06/17","09:00 AM","Admin","Special"));
		return list;
    }
	}
}
