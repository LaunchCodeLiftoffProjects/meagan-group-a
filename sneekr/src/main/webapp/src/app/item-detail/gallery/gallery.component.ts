import { Component, OnInit } from '@angular/core';
import { testItem } from '../mock-item-details';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  itemDetails= testItem
  galleryDisplay = this.itemDetails.photos[0]
  constructor() { }

  ngOnInit(): void {
  }

}
