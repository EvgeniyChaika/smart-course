package com.course.repositories.custom;

import com.course.models.Voucher;

import java.util.List;

/**
 * Created by evgeniy on 08.03.17.
 */

public interface VoucherCustomRepository {

    List<Voucher> getTopVouchersRows(Integer amount, Integer quantity);
}
