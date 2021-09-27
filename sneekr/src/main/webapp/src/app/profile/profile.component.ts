import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { WishListService } from '../_services/wish-list.service';
import {Item} from "@app/models/item";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  wishList: Item[]= [];

  constructor(private token: TokenStorageService, private wishListService: WishListService) { }

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
}
