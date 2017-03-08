package com.control.models;

import javax.persistence.*;
import java.util.Set;

/**
 * Created by evgeniy on 08.03.17.
 */

@Entity
@Table(name = "rNetworks")
public class Network {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "network")
    private String network;

    @OneToMany(mappedBy = "network")
    private Set<Supply> supplies;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNetwork() {
        return network;
    }

    public void setNetwork(String network) {
        this.network = network;
    }

    public Set<Supply> getSupplies() {
        return supplies;
    }

    public void setSupplies(Set<Supply> supplies) {
        this.supplies = supplies;
    }
}
