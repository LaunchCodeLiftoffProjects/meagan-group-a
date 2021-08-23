import { Component, OnInit } from '@angular/core';
import {ListService} from "./list.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: any[] = [];

  constructor(private service: ListService) { }

  ngOnInit(): void {
  this.getList()
  }
getList(){
  this.service.getList().subscribe(data => {
    this.list = data;
  });
}
}
