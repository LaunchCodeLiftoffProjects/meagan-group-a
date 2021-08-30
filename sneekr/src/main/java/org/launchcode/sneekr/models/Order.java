package org.launchcode.sneekr.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private byte id;
    private final List<Item>purchasedItems ;
    private final String user;
    //TODO refactor user as string into user as class

    public Order(List<Item>purchasedItemsInp) {
        this.purchasedItems = purchasedItemsInp;
        this.user = "guest";
    }
    public Order(List<Item>purchasedItemsInp,String userInp) {
        this.purchasedItems = purchasedItemsInp;
        this.user = userInp;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

}