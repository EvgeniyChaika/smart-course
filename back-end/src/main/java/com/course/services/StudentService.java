package com.course.services;

import com.course.wrappers.request.UserWrapper;
import org.springframework.security.core.userdetails.UserDetails;

/**
 * Created on 14.09.17.
 */

public interface StudentService {

    UserDetails createUser(UserWrapper user);
}
