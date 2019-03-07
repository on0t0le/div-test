import { Component } from '@angular/core';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css']
})
export class PageContentComponent {

  items = [
    {name: 'Item 1', content: 'This is item 1 content'},
    {name: 'Item 2', content: 'This is item 2 content'}
  ];

  selectedItem: any = this.items[0];

  addBtnPushed: boolean = false;

  constructor() { }

  checker(){
    console.log('Checking!');
  }
  getItem(selected){
    console.warn(selected);
    this.selectedItem = selected;
  }
}
