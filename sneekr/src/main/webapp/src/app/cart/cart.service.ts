import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Cart } from "@app/models/cart";
import { Item } from "@app/models/item";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private quantity: number = 0;
  private cartQuantitySubject = new Subject<any>();

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

  clearCart(): Observable<any> {
    console.log('clearing cart');
    this.clearCartBadgeQuantity();
    return this.httpClient.get<any>('/cart/clear');
  }

  increaseCartBadgeQuantity() {
    this.quantity++;
    this.cartQuantitySubject.next(this.quantity);
  }

  decreaseCartBadgeQuantity() {
    if (this.quantity > 0) { this.quantity-- };
    this.cartQuantitySubject.next(this.quantity);
  }

  getCartBadgeQuantity(): Observable<any> {
    return this.cartQuantitySubject.asObservable();
  }

  clearCartBadgeQuantity() {
    this.quantity = 0;
    this.cartQuantitySubject.next();
  }

}
