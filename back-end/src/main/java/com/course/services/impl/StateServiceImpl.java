package com.course.services.impl;

import com.course.models.State;
import com.course.repositories.StateRepository;
import com.course.services.StateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by evgeniy on 08.03.17.
 */

@Service
public class StateServiceImpl implements StateService{

    @Autowired
    private StateRepository stateRepository;

    @Override
    public State getStateByCode(String state) {
        return stateRepository.findByState(state);
    }
}
