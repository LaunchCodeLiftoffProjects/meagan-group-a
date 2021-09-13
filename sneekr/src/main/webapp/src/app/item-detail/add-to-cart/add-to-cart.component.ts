import { Component, OnInit } from '@angular/core';
import { testItem } from '../mock-item-details';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  itemDetails= testItem
  itemPrice = this.itemDetails.price

  constructor() { }

  ngOnInit(): void {
  }

}
