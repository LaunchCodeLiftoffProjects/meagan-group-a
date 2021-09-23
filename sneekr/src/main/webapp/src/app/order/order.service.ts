import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  constructor(private http: HttpClient) { }


  getOrder(orderId: number): Observable<any> {
    return this.http.get('/order/?orderId=' + orderId);
  }
}
