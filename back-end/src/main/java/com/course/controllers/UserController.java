package com.course.controllers;

import com.course.services.UserService;
import com.course.wrappers.request.UserWrapper;
import com.course.wrappers.response.LoginUserWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created on 14.09.17.
 */

@RestController
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(value = "/create/user")
    public LoginUserWrapper createUser(@RequestBody UserWrapper user) {
        return userService.createUser(user);
    }
}
