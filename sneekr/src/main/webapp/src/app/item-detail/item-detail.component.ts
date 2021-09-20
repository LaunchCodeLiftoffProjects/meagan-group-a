import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { ItemService } from './item.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ItemDetails } from './item-interface';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  public fetchedItem: any
  public testItem: any

  constructor(private messageService: MessageService, private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItem(1)
    this.getTestItem()
  }
  public getItem(itemId:number): void {
    this.itemService.getItemById(itemId).subscribe(
      (response: any) => {
        this.fetchedItem = response;
        this.messageService.add(this.fetchedItem.toString());
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.messageService.add(error.message.toString())
      }
    );
  }
  public getTestItem(){
    this.testItem = this.itemService.getItemDetails().subscribe(item => this.testItem = item)
  }


}
