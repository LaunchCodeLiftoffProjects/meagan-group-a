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
  list: any[] = [];
  wishList: any[] = [];

  constructor(private service: ListService, private cartService: CartService, private wishListService:WishListService,  private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.getList()
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      this.currentUser = this.tokenStorageService.getUser();
      this.wishListService.getAll(this.currentUser.id).subscribe(data => {
        this.wishList = data;
      });

    }
  }
  getList(){
    this.service.getList().subscribe(data => {
      this.list = data;
    });
  }

  onSubmit(item: any): void {
    this.cartService.addToCart(item).subscribe(data => {
      {
        console.log('item added to cart');
      }
    });
  }
  addWishList(item:any): void {

    this.wishListService.add(item,this.currentUser.id)
      .subscribe(
        response => {
          console.log(response);
          this.wishList.push(item);
        },
        error => {
          console.log(error);
        });
  }
  wishListHas(id:any):boolean {
    return this.wishList.filter(function(item){ return item.id === id }).length>0;
  }
}
