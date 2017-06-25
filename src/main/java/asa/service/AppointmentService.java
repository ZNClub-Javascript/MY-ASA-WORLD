
package asa.service;

import asa.bean.Appointment;
import java.util.*;

public interface AppointmentService{
	
	public List<Appointment> get();
	public boolean add(Appointment appointment);
	
}
