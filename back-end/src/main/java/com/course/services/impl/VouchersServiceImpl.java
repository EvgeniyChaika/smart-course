package com.course.services.impl;

import com.course.models.Network;
import com.course.models.State;
import com.course.models.Supply;
import com.course.models.Voucher;
import com.course.repositories.NetworkRepository;
import com.course.repositories.SupplyRepository;
import com.course.repositories.VoucherRepository;
import com.course.repositories.custom.VoucherCustomRepository;
import com.course.services.StateService;
import com.course.services.VouchersService;
import com.course.wrappers.GeneratedVouchersWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;

/**
 * Created by evgeniy on 08.03.17.
 */

@Service
public class VouchersServiceImpl implements VouchersService {

    @Autowired
    private StateService stateService;

    @Autowired
    private VoucherRepository voucherRepository;

    @Autowired
    private NetworkRepository networkRepository;

    @Autowired
    private SupplyRepository supplyRepository;

    @Autowired
    private VoucherCustomRepository customVoucherRepository;

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

    @Override
    public List<Map<String, Long>> getCountWaitingVouchers() {
        List<Map<String, Long>> returnList = new ArrayList<>();
        Map<String, Long> mapResult;
        List<Object[]> listResults = voucherRepository.getCountWaitingVouchers();
        for (Object[] results : listResults) {
            mapResult = new HashMap<>();
            Long amount = Math.round((Double) results[0]);
            Long quantity = (Long) results[1];
            mapResult.put("amount", amount);
            mapResult.put("quantity", quantity);
            returnList.add(mapResult);
        }
        return returnList;
    }

    @Override
    @Transactional
    public String setNewVouchersForExport(Integer idNetwork, List<GeneratedVouchersWrapper> listGeneratedVouchers) {
        Network network = networkRepository.findOne(idNetwork);
        Supply supply = new Supply();
        supply.setDate(new Date());
        supply.setNetwork(network);
        Supply savedSupply = supplyRepository.save(supply);
        for (GeneratedVouchersWrapper generatedVoucher : listGeneratedVouchers) {
            Integer amount = generatedVoucher.getAmount();
            Integer quantity = generatedVoucher.getQuantity();
            Integer quantityDb = voucherRepository.getCountRowsByAmount(Double.valueOf(amount));
            if (quantity <= quantityDb) {
                List<Voucher> listVouchers = customVoucherRepository.getTopVouchersRows(amount, quantity);

            }
        }
        throw new ArithmeticException();  // for debug
//        return "ok";
    }
}
