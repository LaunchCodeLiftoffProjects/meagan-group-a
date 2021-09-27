import { Component, OnInit } from '@angular/core';
import { ListService } from "./list.service";
import { CartService } from "@app/cart/cart.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  successAlert: any;
  list: any[] = [];

  constructor(private service: ListService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getList();
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
}
