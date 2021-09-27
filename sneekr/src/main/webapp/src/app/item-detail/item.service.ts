import { Injectable } from '@angular/core';
import{Observable} from 'rxjs'
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http'
import { Item } from '@app/models/item';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  //private apiServerUrl = environment.apiURL;
  //private addToCartComponent: AddToCartComponent
  constructor(private messageService: MessageService,private http: HttpClient,  ) { }

  getItemById(itemId: number){
    this.messageService.add(`ItemService: Fetched Item Details of item with id:${itemId}`)
    return this.http.get<any>(`/items/${itemId}`)
  }
  public addToCart(item:Item): Observable<Item> {
    return this.http.post<Item>(`/cart/add/${item.id}`, item);
  }
  public changeValue(itemComponent:any,itemComponentFunction:any,itemComponentParamaters:any){
    itemComponent.itemComponentFunction(itemComponentParamaters)
  }

}
