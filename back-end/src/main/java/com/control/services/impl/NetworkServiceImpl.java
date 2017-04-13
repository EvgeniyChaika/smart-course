package com.control.services.impl;

import com.control.models.Network;
import com.control.repositories.NetworkRepository;
import com.control.services.NetworkService;
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