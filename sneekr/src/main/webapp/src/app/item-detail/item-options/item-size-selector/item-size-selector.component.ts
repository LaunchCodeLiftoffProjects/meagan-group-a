import { Component, OnInit } from '@angular/core';

import { ItemService } from '@app/item-detail/item.service';
import { ItemDetails } from '@app/item-detail/item-interface';
@Component({
  selector: 'app-item-size-selector',
  templateUrl: './item-size-selector.component.html',
  styleUrls: ['./item-size-selector.component.css']
})
export class ItemSizeSelectorComponent implements OnInit {

  sizeSelectorList:string[] = []


  ngOnInit(): void {

  }

}
