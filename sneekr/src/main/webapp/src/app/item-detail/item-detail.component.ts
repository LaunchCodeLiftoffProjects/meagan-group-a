import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { ItemService } from './item.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Item } from '@app/models/item';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  public fetchedItem: any
 

  constructor(private messageService: MessageService, private itemService: ItemService,private addToCartComponent: AddToCartComponent) { }

  ngOnInit(): void {
    this.getItem(1)

  }
  public getItem(itemId:number): void {
    this.itemService.getItemById(itemId).subscribe(
      (response: any) => {
        this.fetchedItem = response;
        this.messageService.add(`Fetched Item #${this.fetchedItem.id} with details of:
        \nname:${this.fetchedItem.name}
        \ndescription:${this.fetchedItem.description}
        \nprice:${this.fetchedItem.price}
        \nsizes:${this.fetchedItem.sizes}
        \ncolors:${this.fetchedItem.colors}
        \nphotos:${this.fetchedItem.photos}
        
        `);
        console.log(response)
        this.addToCartComponent.setDisplayPrice(this.fetchedItem.price)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.messageService.add(error.message.toString())
      }
    );
  }



}
