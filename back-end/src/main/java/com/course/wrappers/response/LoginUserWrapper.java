package com.course.wrappers.response;

import com.course.wrappers.request.UserWrapper;

/**
 * Created on 14.09.17.
 */

public class LoginUserWrapper {

    private boolean authenticated;

    private UserWrapper user;

    public boolean isAuthenticated() {
        return authenticated;
    }

    public void setAuthenticated(boolean authenticated) {
        this.authenticated = authenticated;
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
                "authenticated=" + authenticated +
                ", user=" + user +
                '}';
    }
}
