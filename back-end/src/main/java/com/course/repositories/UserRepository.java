package com.course.repositories;

import com.course.models.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created on 14.09.17.
 */

public interface UserRepository extends JpaRepository<User, Integer> {
}
