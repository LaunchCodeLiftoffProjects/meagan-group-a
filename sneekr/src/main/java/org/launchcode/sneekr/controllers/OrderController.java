package org.launchcode.sneekr.controllers;

import org.launchcode.sneekr.models.Item;
import org.launchcode.sneekr.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.NoSuchElementException;

@RestController
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;
//TODO POST request to create an order + empty the cart and GET request to display the order #
}
