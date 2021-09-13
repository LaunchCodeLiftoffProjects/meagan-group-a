import { Component, OnInit } from '@angular/core';
import { testItem } from '@app/item-detail/mock-item-details';

@Component({
  selector: 'app-item-color-selector',
  templateUrl: './item-color-selector.component.html',
  styleUrls: ['./item-color-selector.component.css']
})
export class ItemColorSelectorComponent implements OnInit {
  itemDetails= testItem
  colorSelectorList = this.itemDetails.colors
  constructor() { }

  ngOnInit(): void {
  }

}
