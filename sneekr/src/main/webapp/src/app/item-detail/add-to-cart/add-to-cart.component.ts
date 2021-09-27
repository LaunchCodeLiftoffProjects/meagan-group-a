import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  public price: number = -1

  constructor() { }

  ngOnInit(): void {
  }
  public setDisplayPrice(price:number){
    this.price=price
  }

}
