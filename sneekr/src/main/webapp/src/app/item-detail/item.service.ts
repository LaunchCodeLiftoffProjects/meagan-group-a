import { Injectable } from '@angular/core';
import { ItemDetails } from './item-interface';
import { testItem } from './mock-item-details';
import{Observable,of} from 'rxjs'
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private messageService: MessageService) { }

  getItemDetails(): Observable<ItemDetails> {
    this.messageService.add("ItemService: Fetched Item Details")
    return of (testItem)


    
  }
}
