import { Component, OnInit } from '@angular/core';

import {ListService} from "./list.service";
import {CartService} from "@app/cart/cart.service";
import {WishListService} from "@app/_services/wish-list.service";
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  currentUser: any;
  isLoggedIn = false;
  successAlert: any;
  list: any[] = [];

  constructor(private service: ListService, private cartService: CartService, private wishListService:WishListService,  private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.getList()
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      this.currentUser = this.tokenStorageService.getUser();
    }
    this.successAlert = document.querySelector('.alert');
  }

  getList(): void {
    this.service.getList().subscribe(data => this.list = data);
  }

  toggleAlert(): void {
    this.successAlert.hasAttribute('hidden') ? this.successAlert.removeAttribute('hidden') : this.successAlert.setAttribute('hidden', 'true');
  }

  onSubmit(item: any): void {
    this.cartService.addToCart(item).subscribe(data => {
      this.toggleAlert();
      window.setTimeout(() => { this.toggleAlert() }, 4000);
    });
    this.cartService.increaseCartBadgeQuantity();
  }
  
  onWishListSubmit(item:any):void{
    this.wishListService.addWishList(item,this.currentUser.id);
  }
  addWishList(item:any): void {

    this.wishListService.add(item,this.currentUser.id)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
}
