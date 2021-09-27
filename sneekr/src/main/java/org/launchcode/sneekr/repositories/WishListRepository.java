package org.launchcode.sneekr.repositories;

import org.launchcode.sneekr.models.WishList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WishListRepository extends JpaRepository<WishList, Integer> {

    //Method for fetching the wishlist of a particular user and order it by created_date
    List<WishList> findAllByUserIdOrderByCreatedDateDesc(Integer userId);

}