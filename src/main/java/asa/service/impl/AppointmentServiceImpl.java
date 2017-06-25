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
public class AppointmentServiceImpl implements ConstantsInterface,AppointmentService{
	
	@Autowired
	private ScheduleDAO scheduleDAO;		
		
    public List<Appointment> get(){
	return new List<Appointment>();
    }

    
	public boolean add(Appointment appointment){
	Schedule schedule= new Schedule();
      BeanUtils.copyProperties(appointment,schedule);
	System.out.println(appointment.getDate()+" - "+schedule.getDate());
      try{
        scheduleDAO.save(schedule);
      }
      
      //failure
      catch(Exception e){
        System.out.println("add Appointment failed due to:\n"+e);
        return false;
      }
      
      //success
      return true;
    }
	
}
