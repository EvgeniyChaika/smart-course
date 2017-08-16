package com.course.models;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by evgeniy on 08.03.17.
 */

@Entity
@Table(name = "r_vouchers")
public class Voucher {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "pin")
    private String pin;

    @Column(name = "created_on")
    @Temporal(TemporalType.DATE)
    private Date createdOn;

    @Column(name = "expired_on")
    @Temporal(TemporalType.TIMESTAMP)
    private Date expiresOn;

    @Column(name = "amount")
    private Double amount;

    @OneToOne
    private SupplyDetail supplyDetail;

    @ManyToOne
    private State state;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPin() {
        return pin;
    }

    public void setPin(String pin) {
        this.pin = pin;
    }

    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }

    public Date getExpiresOn() {
        return expiresOn;
    }

    public void setExpiresOn(Date expiresOn) {
        this.expiresOn = expiresOn;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public SupplyDetail getSupplyDetail() {
        return supplyDetail;
    }

    public void setSupplyDetail(SupplyDetail supplyDetail) {
        this.supplyDetail = supplyDetail;
    }

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }
}
