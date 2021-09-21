import { Injectable } from '@angular/core';
import { ItemDetails } from './item-interface';
import { testItem } from './mock-item-details';
import{Observable,of} from 'rxjs'
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http'
import { environment } from '@environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  //private apiServerUrl = environment.apiURL;

  constructor(private messageService: MessageService,private http: HttpClient ) { }

  getMockItemDetails(): Observable<ItemDetails> {
    this.messageService.add("ItemService: Fetched Mock Item Details")
    return of (testItem)  
  }
  getItemById(itemId: number){
    this.messageService.add(`ItemService: Fetched Item Details of item with id:${itemId}`)
    return this.http.get<any>(`/items/${itemId}`)
  }
  public addToCart(item:ItemDetails): Observable<ItemDetails> {
    return this.http.post<ItemDetails>(`/cart/add/${item.id}`, item);
  }
}
