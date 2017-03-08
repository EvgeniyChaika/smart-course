package com.control.models;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by evgeniy on 08.03.17.
 */

@Entity
@Table(name = "rPairings")
public class Pairing {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "date")
    @Temporal(TemporalType.DATE)
    private Date date;

    @Column(name = "last_pairing_id")
    private Integer lastPairingId;

    @Column(name = "pairing_requested")
    private String pairingRequested;

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

    public Integer getLastPairingId() {
        return lastPairingId;
    }

    public void setLastPairingId(Integer lastPairingId) {
        this.lastPairingId = lastPairingId;
    }

    public String getPairingRequested() {
        return pairingRequested;
    }

    public void setPairingRequested(String pairingRequested) {
        this.pairingRequested = pairingRequested;
    }
}
