package com.course.controllers;

import com.course.services.StudentService;
import com.course.wrappers.request.UserWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created on 14.09.17.
 */

@RestController
public class UserController {

    private final StudentService studentService;

    @Autowired
    public UserController(StudentService studentService) {
        this.studentService = studentService;
    }

    @RequestMapping(value = "/create/user")
    public UserDetails createUser(@RequestBody UserWrapper user) {
        return studentService.createUser(user);
    }
}
