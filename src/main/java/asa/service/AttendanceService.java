
package asa.service;

import asa.bean.Attendance;
import java.util.*;

public interface AttendanceService{
	
	
	public boolean add(Attendance attendance);
	public Attendance get(group,date);
}
