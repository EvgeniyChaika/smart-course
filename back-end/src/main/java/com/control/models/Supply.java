package com.control.models;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

/**
 * Created by evgeniy on 08.03.17.
 */

@Entity
@Table(name = "rSupplies")
public class Supply {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "date")
    @Temporal(TemporalType.DATE)
    private Date date;

    @ManyToOne
    private Network network;

    @OneToMany(mappedBy = "supply")
    private Set<SupplyDetail> supplyDetails;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Network getNetwork() {
        return network;
    }

    public void setNetwork(Network network) {
        this.network = network;
    }

    public Set<SupplyDetail> getSupplyDetails() {
        return supplyDetails;
    }

    public void setSupplyDetails(Set<SupplyDetail> supplyDetails) {
        this.supplyDetails = supplyDetails;
    }
}
