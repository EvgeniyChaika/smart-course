package com.control.repositories;

import com.control.models.Supply;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by evgeniy on 08.03.17.
 */

public interface SupplyRepository extends JpaRepository<Supply, Integer> {

}
