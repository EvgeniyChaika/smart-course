package com.course;

import com.course.models.Role;
import com.course.repositories.RoleRepository;
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

        RoleRepository roleRepository = applicationContext.getBean(RoleRepository.class);

        List<Role> roleList = roleRepository.findAll();

        if (roleList.isEmpty()) {
            Role roleAdmin = new Role();
            roleAdmin.setDescription("admin");
            roleList.add(roleAdmin);

            Role roleUser = new Role();
            roleUser.setDescription("user");
            roleList.add(roleUser);

            roleList = roleRepository.save(roleList);
        }
    }
}