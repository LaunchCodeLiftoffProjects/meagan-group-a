import { Component, OnInit } from '@angular/core';

import { ItemService } from '@app/item-detail/item.service';
import { ItemDetails } from '@app/item-detail/item-interface';
@Component({
  selector: 'app-item-size-selector',
  templateUrl: './item-size-selector.component.html',
  styleUrls: ['./item-size-selector.component.css']
})
export class ItemSizeSelectorComponent implements OnInit {
  itemDetails:ItemDetails={
    id:-1,
    name: "",
    photos: [],
    description: "",
    sizes: [],
    colors: [],
    price: 0}
  sizeSelectorList:string[] = []
  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    this.getItemDetails()
  }
  getItemDetails(){
    this.itemService.getItemDetails()
    .subscribe(item => this.itemDetails = item)
    this.itemService.getItemDetails()
    .subscribe(item => this.sizeSelectorList = item.sizes)
 
  }
}
