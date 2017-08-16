package com.course.controllers;

import com.course.models.Network;
import com.course.services.NetworkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created on 04.04.17.
 */

@RestController
public class NetworksController {

    @Autowired
    private NetworkService networkService;

    @RequestMapping(value = "get/networks")
    public List<Network> getNetworks() {
        return networkService.getNetworks();
    }
}
