
package asa.service;

import asa.bean.Appointment;
import java.util.*;

public interface AppointmentService{
	
	public List<Appointment> get();
	public List<Appointment> getByDate(String date);
	public boolean add(Appointment appointment);
	
}
