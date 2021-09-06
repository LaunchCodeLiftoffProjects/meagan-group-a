package org.launchcode.sneekr.controllers;

import org.launchcode.sneekr.repositories.CustomerOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class CustomerOrderController {

    @Autowired
    private CustomerOrderRepository customerOrderRepository;
//TODO POST request to create an order + empty the cart and GET request to display the order #
}
