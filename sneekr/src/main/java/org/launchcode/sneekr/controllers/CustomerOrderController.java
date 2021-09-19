package org.launchcode.sneekr.controllers;

import org.launchcode.sneekr.models.CustomerOrder;
import org.launchcode.sneekr.repositories.CustomerOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class CustomerOrderController {

    @Autowired
    private CustomerOrderRepository customerOrderRepository;

    @GetMapping("/order/{orderId}")
    public CustomerOrder getOrder(@RequestParam int orderId) {
        Optional<CustomerOrder> order = customerOrderRepository.findById(orderId);
        return  order.get();
    }

    @PostMapping("/order")
    public CustomerOrder saveOrder(@RequestBody CustomerOrder order) {
        return customerOrderRepository.save(order);
    }
}
