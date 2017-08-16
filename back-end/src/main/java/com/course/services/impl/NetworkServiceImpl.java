package com.course.services.impl;

import com.course.models.Network;
import com.course.repositories.NetworkRepository;
import com.course.services.NetworkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created on 04.04.17.
 */

@Service
public class NetworkServiceImpl implements NetworkService {

    @Autowired
    private NetworkRepository networkRepository;

    @Override
    public List<Network> getNetworks() {
        return networkRepository.findAll();
    }
}