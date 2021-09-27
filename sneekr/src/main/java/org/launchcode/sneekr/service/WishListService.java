package org.launchcode.sneekr.service;

import org.launchcode.sneekr.models.WishList;
import org.launchcode.sneekr.repositories.WishListRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;


@Service
@Transactional
public class WishListService {

    private final WishListRepository wishListRepository;

    public WishListService(WishListRepository wishListRepository) {
        this.wishListRepository = wishListRepository;
    }

    //Create Wishlist
    public void createWishlist(WishList wishList) {
        wishListRepository.save(wishList);
    }

    //ReadWishlist
    public List<WishList> readWishList(Integer userId) {
        return wishListRepository.findAllByUserIdOrderByCreatedDateDesc(userId);
    }
}