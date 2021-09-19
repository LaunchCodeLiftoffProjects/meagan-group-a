package org.launchcode.sneekr.models;

import java.util.*;


public class Cart {

    private List<CartItem> items = new ArrayList<>();

    private double total = 0;

    public Cart() {

    }

    public void addItem(Item item, int quantity) {
        for (int i = 0; i < quantity; i++) {
            this.total += item.getPrice();
        }
        this.items.add(new CartItem(item, quantity));
    }

    public List<CartItem> addItem(Item item) {
        if (this.findItemInCart(item).isPresent()) {
             return increaseItemQuantity(item);
        }
        this.total += item.getPrice();
        this.items.add(new CartItem(item, 1));
        return this.items;
    }

    public List<CartItem> removeItem(Item item) {
        CartItem cartItem = this.findItemInCart(item).get();
        double totalItemPrice = cartItem.getItem().getPrice() * cartItem.getQuantity();
        this.total -= totalItemPrice;
        this.items.remove(cartItem);
        return this.items;
    }

    public List<CartItem> increaseItemQuantity(Item item) {
        CartItem cartItem = this.findItemInCart(item).get();
        this.total += cartItem.getItem().getPrice();
        cartItem.setQuantity(cartItem.getQuantity() + 1);
        return this.items;
    }

    public List<CartItem> decreaseItemQuantity(Item item) {
        CartItem cartItem = this.findItemInCart(item).get();
        if(cartItem.getQuantity() -1 == 0) {
            return this.removeItem(item);
        }
        this.total -= cartItem.getItem().getPrice();
        cartItem.setQuantity(cartItem.getQuantity() - 1);
        return this.items;
    }

    public Optional<CartItem> findItemInCart(Item item) {
        for (CartItem cartItem : this.items) {
            if (cartItem.getItem().equals(item)) {
                return Optional.of(cartItem);
            }
        }
        return Optional.empty();
    }

    public List<CartItem> getItems() {
        return items;
    }

    public double getTotal() {
        return this.total;
    }


    @Override
    public String toString() {
        return "Cart{" + "items=" + items + ", total=" + total + '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Cart cart = (Cart) o;

        return items.equals(cart.items);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.items);
    }
}
