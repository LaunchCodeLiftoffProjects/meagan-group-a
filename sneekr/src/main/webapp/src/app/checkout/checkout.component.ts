import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerOrder } from '../models/CustomerOrder';
import { Item } from '../models/item';
import { Cart } from '../models/cart';
import { CartItem } from '../models/cartItem';
import { CheckoutService } from './checkout.service';
import { OrderService } from '../order/order.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart: Cart = new Cart();
  order: CustomerOrder = new CustomerOrder();;
  orderId: any = null;
  confirmedOrder: any = null;
  orderSuccess: boolean = false;

  constructor(private checkoutService: CheckoutService, private orderService: OrderService, private cartService: CartService) {
    this.cartService.getList().subscribe(data => this.cart = data);
    this.order.purchasedItems = this.cart.items;
  }

  onSubmit(): void {
    this.checkoutService.saveOrder(this.order).subscribe(data => {
      this.orderSuccess = true;
      this.orderId = data.id;
      this.cartService.clearCart().subscribe();
      this.ngOnInit();
    });
  }

  getVerifiedOrder(id: number): void {
    this.orderService.getOrder(id).subscribe(data => this.confirmedOrder = data);
  }

  getRoundedCartTotal(): number {
    return Math.round(this.cart.total * 100) / 100;
  }

  ngOnInit(): void {
    if (this.orderSuccess) {
      this.getVerifiedOrder(this.orderId);

    }
  }
}

