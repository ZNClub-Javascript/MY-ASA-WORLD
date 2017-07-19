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


//@Service("appointmentService")
//public class AppointmentServiceImpl implements ConstantsInterface,AppointmentService{
public class AppointmentServiceImpl implements ConstantsInterface{
	
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
	List<Schedule> queried = scheduleDAO.findByDate(date);
	queried.forEach(query->{
		Appointment appointment = new Appointment();
		BeanUtils.copyProperties(query,appointment);
		list.add(appointment);
	});
	    
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
