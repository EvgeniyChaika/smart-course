package com.course.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by evgeniy on 08.03.17.
 */

@RestController
public class MainController {

    //  TODO
    @RequestMapping("/course")
    public String getCourse() {
        return "Course";
    }
}
