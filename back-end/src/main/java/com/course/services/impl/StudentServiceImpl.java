package com.course.services.impl;

import com.course.models.Role;
import com.course.models.domain.User;
import com.course.repositories.UserRepository;
import com.course.services.StudentService;
import com.course.wrappers.request.UserWrapper;
import com.course.wrappers.response.LoginUserWrapper;
import com.google.common.collect.ImmutableList;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.stereotype.Service;

/**
 * Created on 14.09.17.
 */

@Service
public class StudentServiceImpl implements StudentService {

    private final UserRepository userRepository;

    private final AuthenticationManagerBuilder auth;

    private static final Logger LOG = LoggerFactory.getLogger(StudentServiceImpl.class);

    @Autowired
    public StudentServiceImpl(UserRepository userRepository, AuthenticationManagerBuilder auth) {
        this.userRepository = userRepository;
        this.auth = auth;
    }

    @Override
    public LoginUserWrapper createUser(UserWrapper user) {
        User newUser = new User();
        newUser.setUsername(user.getUsername());
        newUser.setPassword(user.getPassword());
        newUser.setAuthorities(ImmutableList.of(Role.ADMIN, Role.STUDENT));
        newUser = userRepository.save(newUser);
        LoginUserWrapper loginUserWrapper = new LoginUserWrapper();
        loginUserWrapper.setAuthenticated(true);
        loginUserWrapper.setUser(user);
        LOG.info("Login wrapper - {}", loginUserWrapper.toString());
//        auth.userDetailsService();
        return loginUserWrapper;
    }
}
