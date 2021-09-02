import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  placeholderOrder: {id: number, name: string, items: [any, any], totalCost: number};
  placeholderOrderItem1: {name: string, price: number};
  placeholderOrderItem2: {name: string, price: number};


  constructor(private httpClient: HttpClient) {
   this.placeholderOrderItem1 = {name: "Sneakers", price: 25};
   this.placeholderOrderItem2 = {name: "Cleats", price: 49.99}
   this.placeholderOrder = {id: 12345, name: "user", items: [this.placeholderOrderItem1, this.placeholderOrderItem2], totalCost: 74.99};

  }

  //TODO call actual order GET methods once OrderController is written and return real order data
  getOrder(): any {

    return this.placeholderOrder;
  }
}
