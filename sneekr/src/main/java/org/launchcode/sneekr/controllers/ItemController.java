package org.launchcode.sneekr.controllers;

import org.launchcode.sneekr.models.Item;
import org.launchcode.sneekr.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.NoSuchElementException;

@RestController
public class ItemController {

    @Autowired
    private ItemRepository itemRepository;

    @GetMapping("/items")
    public Iterable<Item> getItems() {
        return itemRepository.findAll();
    }

    @PostMapping("/items")
    public Item saveItem(@RequestBody Item newItem) {
        return itemRepository.save(newItem);
    }

    @GetMapping("/items/{id}")
    public Item getItem(@PathVariable int id) {
        return itemRepository.findById(id).orElseThrow(NoSuchElementException::new);
    }

    @DeleteMapping("/items/{id}")
    public void removeItem(@PathVariable int id) {
        itemRepository.delete(getItem(id));
    }
}
