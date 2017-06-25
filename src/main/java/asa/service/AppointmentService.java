
package asa.service;

import asa.bean.Appointment;

public interface AppointmentService{
	
	public List<Appointment> get();
	public boolean add(Appointment appointment);
	
}
