package org.launchcode.sneekr.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
public class Item {

    @Id
    @GeneratedValue
    private int id;

    private String name;
    private String description;
    private double price;
    private ArrayList<String> photos;
    private ArrayList<String> colors;
    private ArrayList<String> sizes;


    @ManyToMany
    private List<CustomerOrder> customerOrder = new ArrayList<>();

    public Item(String name, String description, double price) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.photos =new ArrayList<>(List.of("photo1","photo2","photo3"));
        this.colors =new ArrayList<>(List.of("red","blue","yellow"));
        this.sizes =new ArrayList<>(List.of("small","medium","large"));
    }
    public Item(String name, String description, double price,ArrayList<String> photos,ArrayList<String> colors,ArrayList<String> sizes) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.photos =photos;
        this.colors =colors;
        this.sizes =sizes;
    }
    public Item() {
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public List<CustomerOrder> getCustomerOrder() {
        return customerOrder;
    }

    public void setCustomerOrder(List<CustomerOrder> customerOrder) {
        this.customerOrder = customerOrder;
    }

    public ArrayList<String> getColors() {
        return colors;
    }

    public void setColors(ArrayList<String> newColors) {
        this.colors = newColors;
    }   
    public ArrayList<String> getSizes() {
        return sizes;
    }

    public void setSizes(ArrayList<String> newSizes) {
        this.sizes= newSizes;
    }   
    public ArrayList<String> getPhotos() {
        return photos;
    }

    public void setPhotos(ArrayList<String> newPhotos) {
        this.photos = newPhotos;
    } 

 

    @Override
    public String toString() {
        return "Item{id:" + id +
                ",name:" + name +
                ",description:" + description +
                ",price:" + price +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Item item = (Item) o;

        if (id != item.id) return false;
        if (Double.compare(item.price, price) != 0) return false;
        if (!name.equals(item.name)) return false;
        return description.equals(item.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.name, this.description, this.price);
    }
}
