import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [OrderService]
})
export class OrderComponent implements OnInit {

  order: any;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder() {
    this.order = this.orderService.getOrder();
  }

}
