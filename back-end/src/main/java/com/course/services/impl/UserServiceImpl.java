package com.course.services.impl;

import com.course.models.User;
import com.course.repositories.UserRepository;
import com.course.services.UserService;
import com.course.wrappers.request.UserWrapper;
import com.course.wrappers.response.LoginUserWrapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created on 14.09.17.
 */

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    private static final Logger LOG = LoggerFactory.getLogger(UserServiceImpl.class);

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public LoginUserWrapper createUser(UserWrapper user) {
        User newUser = new User();
        newUser.setLogin(user.getLogin());
        newUser.setPassword(user.getPassword());
        userRepository.save(newUser);
        LoginUserWrapper loginUserWrapper = new LoginUserWrapper();
        loginUserWrapper.setAuthenticated(true);
        loginUserWrapper.setUser(user);
        LOG.info(loginUserWrapper.toString());
        return loginUserWrapper;
    }
}
