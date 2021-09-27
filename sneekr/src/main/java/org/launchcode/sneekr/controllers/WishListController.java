package org.launchcode.sneekr.controllers;

import org.launchcode.sneekr.models.Item;
import org.launchcode.sneekr.models.WishList;
import org.launchcode.sneekr.service.WishListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/wishlist")
public class WishListController {

    @Autowired
    private WishListService wishListService;

    //GET wishlist/user_id
    @GetMapping("/{id}")
    public ResponseEntity<List<Item>> getWishList(@PathVariable("id") String id) {

        int user_id= Integer.parseInt(id);
        //get wishlist
        List<WishList> body = wishListService.readWishList(user_id);

        //create productDTO from productId in wishlist
        List<Item> products = new ArrayList<Item>();
        for (WishList wishList : body) {
            products.add(wishList.getProduct());
        }

        return new ResponseEntity<List<Item>>(products, HttpStatus.OK);
    }
    @GetMapping("/{userId}/{productId}")
    public WishList saveWishList(@PathVariable("userId") String userId,@PathVariable("productId") String productId) {
        WishList wishList = new WishList(Integer.valueOf(userId), Integer.valueOf(productId));
        wishListService.createWishlist(wishList);
        return wishList;
    }
    @PostMapping("/{userId}")
    private int addWishList(@PathVariable("userId") String userId,@RequestBody Item item)
    {
        WishList wishList = new WishList(Integer.valueOf(userId), item.getId());
        wishListService.createWishlist(wishList);

        return wishList.getId();
    }
//    @DeleteMapping("/{userId}/{productId}")
//    private void deleteBook(@PathVariable("userId") int userId,@PathVariable("productId") int productId)
//    {
//        wishListService.remove(userId,productId);
//    }

}