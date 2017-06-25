package asa.model;

import java.util.List;
import org.springframework.data.annotation.Id;

public class Schedule {
  @Id
  private String id;
  private List<String> names;
  private String date;
  private String time;
  private String sign;
  private String type;
  
  public Schedule() {

  }
  
  public List<String> getNames() {
    return names;
  }
  

public void setNames(List<String> names) {
this.names = names;
}


public String getDate() {
return date;
}


public void setDate(String date) {
this.date = date;
}


public String getTime() {
return time;
}


public void setTime(String time) {
this.time = time;
}


public String getSign() {
return sign;
}


public void setSign(String sign) {
this.sign = sign;
}


public String getType() {
return type;
}


public void setType(String type) {
this.type = type;
}

}
