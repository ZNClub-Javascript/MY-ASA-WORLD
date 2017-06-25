package asa.bean;

import java.util.List;

public class Appointment {


private List<String> names = null;

private String date;

private String time;

private String sign;

private String type;

public Appointment() {
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
