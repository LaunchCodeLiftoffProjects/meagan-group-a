import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerOrder } from '../models/CustomerOrder';
import { Item } from '../models/item';
import { CheckoutService } from './checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  order: CustomerOrder;
  testItems: Item[] = [];

  constructor(private service: CheckoutService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.order = new CustomerOrder();
  }

  onSubmit(): void {
    this.service.saveOrder(this.order);
  }

  ngOnInit(): void {
  }

}
