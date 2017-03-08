package com.control.repositories.custom;

import com.control.models.Voucher;

import java.util.List;

/**
 * Created by evgeniy on 08.03.17.
 */

public interface VoucherCustomRepository {

    List<Voucher> getTopVouchersRows(Integer amount, Integer quantity);
}
