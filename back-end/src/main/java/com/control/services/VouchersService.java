package com.control.services;

import com.control.wrappers.GeneratedVouchersWrapper;

import java.util.List;
import java.util.Map;

/**
 * Created by evgeniy on 08.03.17.
 */
public interface VouchersService {

    void createNewVouchers(List<GeneratedVouchersWrapper> vouchers);

    List<Map<String, Long>> getCountWaitingVouchers();
}
