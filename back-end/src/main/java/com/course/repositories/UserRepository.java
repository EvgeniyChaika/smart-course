package com.course.repositories;

import com.course.models.domain.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.security.core.userdetails.UserDetails;

/**
 * Created on 14.09.17.
 */

public interface UserRepository extends CrudRepository<User, Integer> {

    UserDetails findByUsername(String userName);
}
