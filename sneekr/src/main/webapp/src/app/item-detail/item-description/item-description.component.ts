import { Component, OnInit } from '@angular/core';
import { testItem } from '../mock-item-details';

@Component({
  selector: 'app-item-description',
  templateUrl: './item-description.component.html',
  styleUrls: ['./item-description.component.css']
})
export class ItemDescriptionComponent implements OnInit {

  itemDetails= testItem
  ItemDetailHeader = this.itemDetails.name
  ItemDetailDescription = this.itemDetails.description

  constructor() { }

  ngOnInit(): void {
  }

}
