import { Component, OnInit } from '@angular/core';
import { testItem } from '../mock-item-details';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  itemDetails= testItem
  itemPrice = this.itemDetails.price

  constructor() { }

  ngOnInit(): void {
  }

}
