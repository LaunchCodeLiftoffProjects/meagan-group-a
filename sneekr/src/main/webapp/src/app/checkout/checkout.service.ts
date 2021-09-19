import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Item } from '../models/item'
import { CustomerOrder } from '../models/CustomerOrder';

@Injectable({
  providedIn: 'root'
})

export class CheckoutService {

  constructor(private http: HttpClient) { }

  public saveOrder(order: CustomerOrder): Observable<CustomerOrder> {
    return this.http.post<CustomerOrder>('/order', order);
  }
}
