package org.launchcode.sneekr.controllers;

import org.launchcode.sneekr.models.Cart;
import org.launchcode.sneekr.models.Item;
import org.launchcode.sneekr.repositories.CartRepository;
import org.launchcode.sneekr.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class CartController {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ItemRepository itemRepository;

    @GetMapping("/cart/{id}")
    public Optional<Cart> viewCart(@PathVariable int id) {
        return cartRepository.findById(id);
    }

    @PostMapping("/cart/{cartId}/add/{itemId}")
    public void addToCart(@PathVariable int itemId, @PathVariable int cartId) {
        Optional<Item> item = itemRepository.findById(itemId);
        Optional<Cart> cart = cartRepository.findById(cartId);
        if (cart.isPresent() && item.isPresent()) {
            cart.get().addItem(item.get());
        }
    }

    @PostMapping("/cart/{cartId}/remove/{itemId}")
    public void removeFromCart(@PathVariable int itemId, @PathVariable int cartId) {
        Optional<Item> item = itemRepository.findById(itemId);
        Optional<Cart> cart = cartRepository.findById(cartId);
        if (cart.isPresent() && item.isPresent()) {
            cart.get().removeItem(item.get());
        }
    }
}
