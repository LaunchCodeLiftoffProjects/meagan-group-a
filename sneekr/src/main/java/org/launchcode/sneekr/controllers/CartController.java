package org.launchcode.sneekr.controllers;

import org.launchcode.sneekr.models.Cart;
import org.launchcode.sneekr.models.Item;
import org.launchcode.sneekr.repositories.ItemRepository;
import org.launchcode.sneekr.utils.CartUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Optional;

@RestController
public class CartController {

    @Autowired
    private ItemRepository itemRepository;

    @GetMapping("/cart")
    public Cart viewCart(HttpServletRequest httpServletRequest) {
        return CartUtility.getCartInSession(httpServletRequest);
    }

    @PostMapping("/cart/add/{itemId}")
    public Cart addToCart(@PathVariable int itemId, HttpServletRequest httpServletRequest) {
        Cart cart = CartUtility.getCartInSession(httpServletRequest);
        Optional<Item> item = itemRepository.findById(itemId);
        item.ifPresent(cart::addItem);
        return cart;
    }

    @PostMapping("/cart/remove/{itemId}")
    public void removeFromCart(@PathVariable int itemId, HttpServletRequest httpServletRequest) {
        Cart cart = CartUtility.getCartInSession(httpServletRequest);
        Optional<Item> item = itemRepository.findById(itemId);
        item.ifPresent(cart::removeItem);
    }
}
