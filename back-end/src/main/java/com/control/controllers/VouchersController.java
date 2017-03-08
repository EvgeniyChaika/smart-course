package com.control.controllers;

import com.control.services.VouchersService;
import com.control.wrappers.GeneratedVouchersWrapper;
import com.control.wrappers.request.JsonNewGeneratedVouchersWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * Created by evgeniy on 08.03.17.
 */

@RestController
public class VouchersController {

    @Autowired
    private VouchersService voucherService;

    @RequestMapping("/generate/vouchers")
    public String generateVouchers(@RequestBody List<GeneratedVouchersWrapper> vouchers) {
        voucherService.createNewVouchers(vouchers);
        return "Ok";
    }

    @RequestMapping("/get/vouchers/state/waiting/count")
    @ResponseBody
    public List<Map<String, Long>> getCountWaitingVouchers() {
        return voucherService.getCountWaitingVouchers();
    }

    @RequestMapping(value = "/export/vouchers/new", method = RequestMethod.POST)    //TODO
    @ResponseBody
    public String exportNewVouchers(@RequestBody JsonNewGeneratedVouchersWrapper data) {
        Integer idNetwork = data.getId();
        List<GeneratedVouchersWrapper> listGeneratedVouchers = data.getVouchers();
        String result = voucherService.setNewVouchersForExport(idNetwork, listGeneratedVouchers);
        return "{status:OK}";
    }
}
