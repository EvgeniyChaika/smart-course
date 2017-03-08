package com.control.services.impl;

import com.control.models.State;
import com.control.models.Voucher;
import com.control.repositories.VoucherRepository;
import com.control.services.StateService;
import com.control.services.VouchersService;
import com.control.wrappers.GeneratedVouchersWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

/**
 * Created by evgeniy on 08.03.17.
 */

@Service
public class VouchersServiceImpl implements VouchersService{

    @Autowired
    private StateService stateService;

    @Autowired
    private VoucherRepository voucherRepository;

    @Override
    @Transactional
    public void createNewVouchers(List<GeneratedVouchersWrapper> vouchers) {
        State state = stateService.getStateByCode("WAITING");
        if (state != null) {
            for (GeneratedVouchersWrapper voucherWrapper : vouchers) {
                for (int i = 0; i < voucherWrapper.getQuantity(); i++) {
                    Voucher voucher = new Voucher();
                    voucher.setAmount(Double.valueOf(voucherWrapper.getAmount()));
                    voucher.setCreatedOn(new Date());
                    voucher.setState(state);
                    voucher.setPin(String.valueOf(Math.random() * 10000000000000000l));
                    voucherRepository.save(voucher);
                }
            }
        }
    }
}
