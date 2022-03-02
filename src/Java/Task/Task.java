package Java.Task;

import java.sql.*;

public class Task {
    String name;
    int duration;
    int priority;
    Date dueDate;

    Task(String name, int duration, int priority, Date dueDate) {
        if (name != null){
            this.name = name;
        } else {
            this.name = "placeholder"; //TODO ska va ett error här, man får inte ha en task utan namn
        }
        if (duration != 0){
            this.duration = duration;
        } else{
            this.duration = 0; //för senare calcs så får duration och priority aldrig va null
        }
        if (priority > 0 || priority < 6){
            this.priority = priority;
        } else {
            this.priority = 1;
        }

    }
}
