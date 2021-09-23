import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [OrderService]
})
export class OrderComponent implements OnInit {

  searchId: any;

  order: any;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.orderService.getOrder(this.searchId).subscribe(data => this.order = data);
  }

}
