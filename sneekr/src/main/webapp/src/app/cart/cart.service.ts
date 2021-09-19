import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Cart} from "@app/models/cart";
import {Item} from "@app/models/item";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient) { }

  getList(): Observable<Cart> {
    console.log('get cart items');
    return this.httpClient.get<Cart>(`/cart`);
  }
  addToCart(item: Item): Observable<any> {
    console.log('post cart items');
    return this.httpClient.post<any>(`/cart/add/${item.id}`,{});
  }

  decreaseQty(item: Item): Observable<any> {
    console.log('post cart items');
    return this.httpClient.post<any>(`/cart/decreaseQty/${item.id}`,{});
  }

}
