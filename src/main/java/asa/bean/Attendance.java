package asa.bean;

import java.util.HashMap;
import java.util.Map;

public class Attendance {


  private String group;

  private String date;

  private Map<String, Boolean> members = new HashMap<String, Boolean>();
  
  public Attendance(){
  }
  
  public Attendance(String group, String date, Map<String, Boolean> members){
    this.group=group;
    this.date=date;
    this.members=members;
  }

  public String getGroup() {
    return group;
  }


  public void setGroup(String group) {
    this.group = group;
  }

  
  public String getDate() {
    return date;
  }

  
  public void setDate(String date) {
    this.date = date;
  }

  
  public Map<String, Boolean> getMembers() {
    return this.members;
  }

  
  public void setMembers(Map<String, Boolean> members) {
    this.members=members;
  }

}
