package com.course.repositories.custom.impl;

import com.course.models.Voucher;
import com.course.repositories.custom.VoucherCustomRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

/**
 * Created by evgeniy on 08.03.17.
 */

@Repository
public class VoucherCustomRepositoryImpl implements VoucherCustomRepository {

    @PersistenceContext
    private EntityManager em;

    @Override
    public List<Voucher> getTopVouchersRows(Integer amount, Integer quantity) {
        List<Voucher> listVouchers = em.createNativeQuery("SELECT * FROM receipts.rVoucher AS v WHERE v.amount=:amount LIMIT :quantity", Voucher.class)
                .setParameter("amount", amount)
                .setParameter("quantity", quantity)
                .getResultList();
        return listVouchers;
    }
}
