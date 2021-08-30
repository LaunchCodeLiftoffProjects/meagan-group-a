package org.launchcode.sneekr.repositories;

import org.launchcode.sneekr.models.Item;
import org.launchcode.sneekr.models.Order;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends CrudRepository<Order, byte> {
}
