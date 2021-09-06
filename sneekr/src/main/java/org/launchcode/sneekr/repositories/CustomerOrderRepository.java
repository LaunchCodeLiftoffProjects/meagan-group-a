package org.launchcode.sneekr.repositories;

import org.launchcode.sneekr.models.CustomerOrder;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerOrderRepository extends CrudRepository<CustomerOrder, Integer> {
}
