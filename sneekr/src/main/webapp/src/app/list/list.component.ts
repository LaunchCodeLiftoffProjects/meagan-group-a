import { Component, OnInit } from '@angular/core';
import {ListService} from "./list.service";
import {CartService} from "@app/cart/cart.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: any[] = [];

  constructor(private service: ListService, private cartService: CartService) { }

  ngOnInit(): void {
  this.getList()
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
}
