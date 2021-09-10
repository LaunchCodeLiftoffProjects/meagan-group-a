import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ActivatedRoute, Router } from '@angular/router';
import { AddItemService } from './add-item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  model: Item;

  constructor(private addItemService: AddItemService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.model = new Item();
  }

  onSubmit(): void {
    this.addItemService.saveItem(this.model).subscribe(result => this.gotToItemList());
  }

  gotToItemList() {
    this.router.navigate(['/listView']);
  }

  ngOnInit(): void {
  }

}
