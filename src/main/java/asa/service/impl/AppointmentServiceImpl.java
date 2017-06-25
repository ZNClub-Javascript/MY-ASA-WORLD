package asa.service.impl;

import asa.service.ConstantsInterface;
import asa.service.AppointmentService;
import asa.dao.ScheduleDAO ;
import asa.model.Appointment;
import asa.model.Schedule;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.BeanUtils;



@Service("appointmentService")
public class AppointmentServiceImpl implements ConstantsInterface,AppointmentService{
	
	@Autowired
	private ScheduleDAO scheduleDAO;
	
	public String authenticate(String username, String password){
		
    public List<Appointment> get(){
    
    }
    
	  public boolean add(Appointment appointment){
      BeanUtils.copyProperties(Appointment,Schedule);
      try{
        scheduleDAO.save(Schedule);
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
