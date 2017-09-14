package com.course.wrappers.response;

import com.course.wrappers.request.UserWrapper;

/**
 * Created on 14.09.17.
 */

public class LoginUserWrapper {

    private boolean isAuthenticated;

    private UserWrapper user;

    public boolean isAuthenticated() {
        return isAuthenticated;
    }

    public void setAuthenticated(boolean authenticated) {
        isAuthenticated = authenticated;
    }

    public UserWrapper getUser() {
        return user;
    }

    public void setUser(UserWrapper user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "LoginUserWrapper{" +
                "isAuthenticated=" + isAuthenticated +
                ", user=" + user +
                '}';
    }
}
