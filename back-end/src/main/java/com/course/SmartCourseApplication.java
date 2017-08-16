package com.course;

import com.course.models.User;
import com.course.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.ApplicationContext;

import java.util.List;

/**
 * Created by evgeniy on 08.03.17.
 */

@SpringBootApplication
public class SmartCourseApplication extends SpringBootServletInitializer implements CommandLineRunner {

    @Autowired
    private ApplicationContext applicationContext;

    public static void main(String[] args) {
        SpringApplication.run(SmartCourseApplication.class, args);
    }

    @Override
    public void run(String... strings) throws Exception {
        checkNetworksTable();
    }

    private void checkNetworksTable() {

        UserRepository userRepository = applicationContext.getBean(UserRepository.class);

        List<User> userList = userRepository.findAll();

        if (userList.isEmpty()) {
            User userAdmin = new User();
            userAdmin.setUserName("Admin");
            userList.add(userAdmin);

            userList = userRepository.save(userList);
        }
    }
}