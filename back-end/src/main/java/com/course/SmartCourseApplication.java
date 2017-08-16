package com.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.ApplicationContext;

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

//        NetworkRepository networkRepository = applicationContext.getBean(NetworkRepository.class);
//
//        List<User> networksList = networkRepository.findAll();
//
//        if (networksList.isEmpty()) {
//            User network1 = new User();
//            network1.setNetwork("UkrTelecom");
//            networksList.add(network1);
//
//            User network2 = new User();
//            network2.setNetwork("Triolan");
//            networksList.add(network2);
//
//            networksList = networkRepository.save(networksList);
//        }
    }
}