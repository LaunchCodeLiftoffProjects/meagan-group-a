import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Item } from '../models/item'

@Injectable({
  providedIn: 'root'
})

export class AddItemService {

  constructor(private http: HttpClient) {
  }

  public saveItem(item: Item): Observable<Item> {
    return this.http.post<Item>('/items', item);
  }
}
