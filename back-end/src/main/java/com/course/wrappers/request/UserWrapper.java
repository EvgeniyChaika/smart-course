package com.course.wrappers.request;

/**
 * Created on 14.09.17.
 */
public class UserWrapper {

    private String login;

    private String password;

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
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
                "login='" + login + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
