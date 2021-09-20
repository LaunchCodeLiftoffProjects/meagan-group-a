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
  private apiServerUrl = environment.apiURL;

  constructor(private messageService: MessageService,private http: HttpClient ) { }

  getItemDetails(): Observable<ItemDetails> {
    this.messageService.add("ItemService: Fetched Test Item Details")
    return of (testItem)  
  }
  getItemById(itemId: number){
    this.messageService.add(`ItemService: Fetched Item Details of item with id:${itemId}`)
    return this.http.get<any>(`${this.apiServerUrl}/items/${itemId}`)
  }
}
