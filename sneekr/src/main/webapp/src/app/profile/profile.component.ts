import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { WishListService } from '../_services/wish-list.service';
import {Item} from "@app/models/item";
import {CartService} from "@app/cart/cart.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  successAlert: any;
  wishList: Item[]= [];

  constructor(private token: TokenStorageService, private wishListService: WishListService, private cartService: CartService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.wishListService.getAll(this.currentUser.id).subscribe(data => {
      this.wishList = data;
    });
  }
  delete(item: any): void {
    this.wishListService.delete(item,this.currentUser.id).subscribe(d => {{}});
    this.wishList.splice(this.wishList.indexOf(item), 1);
  }
  addToCart(item: any): void {
    this.cartService.addToCart(item).subscribe(data => {
      this.toggleAlert();
      window.setTimeout(() => { this.toggleAlert() }, 4000);
    });
    this.cartService.increaseCartBadgeQuantity();
    this.delete(item);
  }
  toggleAlert(): void {
    this.successAlert.hasAttribute('hidden') ? this.successAlert.removeAttribute('hidden') : this.successAlert.setAttribute('hidden', 'true');
  }
}
