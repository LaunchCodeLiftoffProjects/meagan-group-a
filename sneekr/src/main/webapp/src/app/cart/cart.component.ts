import { Component, OnInit } from '@angular/core';
import {CartService} from "@app/cart/cart.service";
import {Cart} from "@app/models/cart";
import {CartItem} from "@app/models/cartItem";
import {Item} from "@app/models/item";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart = new Cart();

 /* cart = {items:[
    {item:{url:'https://ca-times.brightspotcdn.com/dims4/default/f5a56d2/2147483647/strip/true/crop/6688x4458+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F0d%2F58%2F79797ec14bdfb6fc421d8402f801%2Fla-photos-1staff-477327-fi-sneaker-collection-gxc-0133.JPG',name:'sneaker', description:'shoe one nike brand', price: 90}, quantity: 1},
    {item:{url:'https://ca-times.brightspotcdn.com/dims4/default/f5a56d2/2147483647/strip/true/crop/6688x4458+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F0d%2F58%2F79797ec14bdfb6fc421d8402f801%2Fla-photos-1staff-477327-fi-sneaker-collection-gxc-0133.JPG',name:'sneaker', description:'shoe two nike brand some text some text some text some text some text some text some text', price: 100}, quantity: 1}
    ]};*/
  constructor(private service: CartService) { }

  ngOnInit(): void {
    this.getCartList();
  }
 getCartList() {
   this.service.getList().subscribe(data => {
     this.cart = data;
   })
 }
  add(item: Item) {
    this.service.addToCart(item).subscribe(() => { this.getCartList();})
  }
  remove(item: Item) {
    this.service.decreaseQty(item).subscribe(() => { this.getCartList();})
  }

}
