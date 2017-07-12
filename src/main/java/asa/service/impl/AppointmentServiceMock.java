package asa.service.impl;

import asa.service.ConstantsInterface;
import asa.service.AppointmentService;
import asa.dao.ScheduleDAO ;
import asa.bean.Appointment;
import asa.model.Schedule;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.BeanUtils;
import java.util.*;


@Service("appointmentService")
public class AppointmentServiceMock implements ConstantsInterface,AppointmentService{
	
	@Autowired
	private ScheduleDAO scheduleDAO;		
		
    public List<Appointment> get(){
	List<Appointment> list = new ArrayList<>();
	List<Schedule> queried = scheduleDAO.findAll();
	queried.forEach(query->{
		Appointment appointment = new Appointment();
		BeanUtils.copyProperties(query,appointment);
		list.add(appointment);
	});
	    
	  return list;
    }
	
	public List<Appointment> getByDate(String date){
		List<Appointment> list = new ArrayList<>();
		List<String> names=new  ArrayList<>();
		names.add("Jerry");
		names.add("Kenny");
		names.add("Vella");
		names.add("Dough");
		
		list.add(new Appointment(names,"30/06/17","06:00 AM","Admin","Regular"));
		list.add(new Appointment(names,"30/06/17","07:00 AM","Admin","Regular"));
		list.add(new Appointment(names,"30/06/17","09:00 AM","Admin","Special"));
		return list;
    }

    
	public boolean add(Appointment appointment){
		Schedule schedule= new Schedule();
		BeanUtils.copyProperties(appointment,schedule);
		System.out.println(appointment.getDate()+" - "+schedule.getDate());

	       if(scheduleDAO.insert(schedule)==null){
			System.out.println("add Appointment failed");
			return false;
	       }
		
      		//success
      		return true;
    }
	
}
