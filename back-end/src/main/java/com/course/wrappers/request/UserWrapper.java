package com.course.wrappers.request;

/**
 * Created on 14.09.17.
 */
public class UserWrapper {

    private String username;

    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "UserWrapper{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
