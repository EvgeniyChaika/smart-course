package com.course.models;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;

/**
 * Created by evgeniy on 08.03.17.
 */
@Component
public enum Role implements GrantedAuthority {
    STUDENT,
    ADMIN;

    @Override
    public String getAuthority() {
        return name();
    }
}
