package org.launchcode.sneekr.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
public class CustomerOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(	name = "items_customer_order",
            joinColumns = @JoinColumn(name = "customer_order_id"),
            inverseJoinColumns = @JoinColumn(name = "purchased_items_id"))
    private List<Item> purchasedItems = new ArrayList<>();

    @ManyToOne
    private User user;

    @NotNull
    private String name;

    @NotNull
    private String email;

    @NotNull
    private String address;

    private String address2;

    @NotNull
    private String country;

    @NotNull
    private String state;

    @NotNull
    private String city;

    @NotNull
    private String postalCode;

    public CustomerOrder(List<Item>purchasedItems, User user, String name, String address, String address2, String country, String state, String city, String postalCode) {
        this.purchasedItems = purchasedItems;
        this.user = user;
        this.name = name;
        this.email = user.getEmail();
        this.address = address;
        this.address2 = address2;
        this.country = country;
        this.state = state;
        this.city = city;
        this.postalCode = postalCode;
    }

    public CustomerOrder(List<Item>purchasedItems, String name, String email, String address, String address2, String country, String state, String city, String postalCode) {
        this.purchasedItems = purchasedItems;
        this.name = name;
        this.email = email;
        this.address = address;
        this.address2 = address2;
        this.country = country;
        this.state = state;
        this.city = city;
        this.postalCode = postalCode;
    }

    public CustomerOrder() {}

    public int getId() {
        return id;
    }

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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
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