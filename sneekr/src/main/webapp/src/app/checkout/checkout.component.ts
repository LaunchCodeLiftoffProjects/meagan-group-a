import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerOrder } from '../models/CustomerOrder';
import { Item } from '../models/item';
import { CheckoutService } from './checkout.service';
import { OrderService } from '../order/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  order: CustomerOrder;
  orderId: any = null;
  confirmedOrder: any = null;
  orderSuccess: boolean = false;

  constructor(private checkoutService: CheckoutService, private orderService: OrderService) {
    this.order = new CustomerOrder();
  }

  onSubmit(): void {
    this.checkoutService.saveOrder(this.order).subscribe(data => {
      this.orderSuccess = true;
      this.orderId = data.id;
      this.ngOnInit();
    });
  }

  getVerifiedOrder(id: number): void {
    this.orderService.getOrder(id).subscribe(data => this.confirmedOrder = data);
  }

  ngOnInit(): void {
    if (this.orderSuccess) {
      this.getVerifiedOrder(this.orderId);
    }
  }
}

