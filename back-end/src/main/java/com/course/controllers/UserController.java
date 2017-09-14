package com.course.controllers;

import com.course.models.User;
import com.course.services.UserService;
import com.course.wrappers.request.NewUserWrapper;
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
    public User createUser(@RequestBody NewUserWrapper user) {
        User newUser = new User();
        newUser.setLogin(user.getLogin());
        newUser.setPassword(user.getPassword());
        return userService.createUser(newUser);
    }
}
