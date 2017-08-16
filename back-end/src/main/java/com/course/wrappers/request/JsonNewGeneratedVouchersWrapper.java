package com.course.wrappers.request;

import com.course.wrappers.GeneratedVouchersWrapper;

import java.util.List;

/**
 * Created by evgeniy on 08.03.17.
 */

public class JsonNewGeneratedVouchersWrapper {

    private Integer id;

    private List<GeneratedVouchersWrapper> vouchers;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public List<GeneratedVouchersWrapper> getVouchers() {
        return vouchers;
    }

    public void setVouchers(List<GeneratedVouchersWrapper> vouchers) {
        this.vouchers = vouchers;
    }
}