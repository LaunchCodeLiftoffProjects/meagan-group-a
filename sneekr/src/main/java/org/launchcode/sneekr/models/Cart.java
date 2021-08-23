package org.launchcode.sneekr.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
public class Cart {

    @Id
    @GeneratedValue
    private int id;

    private ArrayList<Item> items = new ArrayList<>();

    public Cart() {

    }

    public void addItem(Item item) {
        this.items.add(item);
    }

    public void removeItem(Item item) {
        this.items.remove(item);
    }

    public int getId() {
        return id;
    }

    public List<Item> getItems() {
        return items;
    }


    @Override
    public String toString() {
        StringBuilder itemList = new StringBuilder();
        for (Item i : this.items) {
            itemList.append(i.toString()).append(" ");
        }
        return "Cart{" + "id=" + id + ", items=" + itemList + '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Cart cart = (Cart) o;

        if (id != cart.id) return false;
        return items.equals(cart.items);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.items);
    }
}
