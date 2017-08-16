package com.course.services;

import com.course.wrappers.GeneratedVouchersWrapper;

import java.util.List;
import java.util.Map;

/**
 * Created by evgeniy on 08.03.17.
 */
public interface VouchersService {

    void createNewVouchers(List<GeneratedVouchersWrapper> vouchers);

    List<Map<String, Long>> getCountWaitingVouchers();

    String setNewVouchersForExport(Integer idNetwork, List<GeneratedVouchersWrapper> listGeneratedVouchers);
}
