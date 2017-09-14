package com.course.services;

import com.course.wrappers.request.UserWrapper;
import com.course.wrappers.response.LoginUserWrapper;

/**
 * Created on 14.09.17.
 */

public interface UserService {

    LoginUserWrapper createUser(UserWrapper user);
}
