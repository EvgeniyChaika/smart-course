package com.course.repositories;

import com.course.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created on 16.08.17.
 */

public interface UserRepository extends JpaRepository<User, Integer> {

}
