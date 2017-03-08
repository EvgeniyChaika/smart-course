package com.control.repositories;

import com.control.models.Voucher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * Created by evgeniy on 08.03.17.
 */

public interface VoucherRepository extends JpaRepository<Voucher, Integer> {

    @Query("select v.amount,count (v.id) from Voucher as v join v.state as st where st.state='WAITING' group by v.amount")
    List<Object[]> getCountWaitingVouchers();

    @Query("select count (v) from Voucher as v where v.amount=?1")
    Integer getCountRowsByAmount(Double cost);
}
