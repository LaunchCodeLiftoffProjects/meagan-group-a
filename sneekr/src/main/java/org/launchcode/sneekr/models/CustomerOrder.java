package org.launchcode.sneekr.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
public class CustomerOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @ManyToMany(mappedBy = "customerOrder")
    private List<Item> purchasedItems;

    @ManyToOne
    private User user;

    public CustomerOrder(List<Item>purchasedItems, User user) {
        this.purchasedItems = purchasedItems;
        this.user = user;
    }

    public CustomerOrder() {}

    public List<Item> getPurchasedItems() {
        return purchasedItems;
    }

    public void setPurchasedItems(List<Item> purchasedItems) {
        this.purchasedItems = purchasedItems;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "CustomerOrder{" + "id=" + id + ", purchasedItems=" + purchasedItems + ", user=" + user + '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        CustomerOrder that = (CustomerOrder) o;

        if (id != that.id) return false;
        if (purchasedItems != null ? !purchasedItems.equals(that.purchasedItems) : that.purchasedItems != null) return false;
        return user != null ? user.equals(that.user) : that.user == null;
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.purchasedItems, this.user);
    }
}