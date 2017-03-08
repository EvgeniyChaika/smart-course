package com.control.controllers;

import com.control.services.VouchersService;
import com.control.wrappers.GeneratedVouchersWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by evgeniy on 08.03.17.
 */

@RestController
public class VouchersControllers {

    @Autowired
    private VouchersService voucherService;

    @RequestMapping("/generate/vouchers")
    public String generateVouchers(@RequestBody List<GeneratedVouchersWrapper> vouchers) {
        voucherService.createNewVouchers(vouchers);
        return "Ok";
    }
}
