package com.course;

import com.course.models.Network;
import com.course.repositories.NetworkRepository;
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

        NetworkRepository networkRepository = applicationContext.getBean(NetworkRepository.class);

        List<Network> networksList = networkRepository.findAll();

        if (networksList.isEmpty()) {
            Network network1 = new Network();
            network1.setNetwork("UkrTelecom");
            networksList.add(network1);

            Network network2 = new Network();
            network2.setNetwork("Triolan");
            networksList.add(network2);

            networksList = networkRepository.save(networksList);
        }
    }
}