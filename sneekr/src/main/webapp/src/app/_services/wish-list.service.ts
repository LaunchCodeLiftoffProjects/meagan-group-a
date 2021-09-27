import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "@app/models/item";

const baseUrl = '/wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(private http: HttpClient) { }

  public addWishList(item: Item, userId:any): Observable<Item> {
    return this.http.get(`/wishlist/${userId}/${item.id}`);
  }
  public removeWishList(item: Item, userId:any): Observable<Item> {
    return this.http.get(`/wishlist/remove/${userId}/${item.id}`);
  }
  getAll(userId: any): Observable<Item[]> {
    return this.http.get<Item[]>(`/wishlist/${userId}`);
  }

  get(id: any): Observable<Item> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  add(item: Item, userId:any): Observable<any> {
    return this.http.post(`${baseUrl}/${userId}`,item);
  }

  delete(item: Item, userId: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${userId}/${item.id}`);
  }
}
