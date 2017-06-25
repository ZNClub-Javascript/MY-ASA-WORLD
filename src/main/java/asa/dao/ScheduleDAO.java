
package asa.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import asa.model.Schedule;

@Repository("scheduleDAO")
public interface ScheduleDAO extends MongoRepository<Schedule, String> {

    
    public List<Schedule> findAll();
    public void save(Schedule schedule);

}
