package com.control.repositories;

import com.control.models.Voucher;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by evgeniy on 08.03.17.
 */

public interface VoucherRepository extends JpaRepository<Voucher, Integer> {


}
