package com.course.services.impl;

import com.course.models.Role;
import com.course.models.domain.User;
import com.course.repositories.UserRepository;
import com.course.services.StudentService;
import com.course.wrappers.request.UserWrapper;
import com.google.common.collect.ImmutableList;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

/**
 * Created on 14.09.17.
 */

@Service
public class StudentServiceImpl implements StudentService {

    private final UserRepository userRepository;

    private final UserDetailsService userDetailsService;

    private static final Logger LOG = LoggerFactory.getLogger(StudentServiceImpl.class);

    @Autowired
    public StudentServiceImpl(UserRepository userRepository, UserDetailsService userDetailsService) {
        this.userRepository = userRepository;
        this.userDetailsService = userDetailsService;
    }

    @Override
    public UserDetails createUser(UserWrapper user) {
        User newUser = new User();
        newUser.setUsername(user.getUsername());
        newUser.setPassword(user.getPassword());
        newUser.setAuthorities(ImmutableList.of(Role.STUDENT));
        newUser = userRepository.save(newUser);
        return userDetailsService.loadUserByUsername(newUser.getUsername());
    }
}
