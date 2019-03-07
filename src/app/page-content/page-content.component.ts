import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css']
})
export class PageContentComponent implements OnInit {

  items = [
    { name: 'Item 1', content: 'This is item 1 content' },
    { name: 'Item 2', content: 'This is item 2 content' }
  ];

  itemGroup: FormGroup;

  selectedItem: any = this.items[0];

  addBtnPushed: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.itemGroup = this.fb.group({
      itemName: [''],
      itemContent: ['']
    });
  }

  checker() {
    console.log('Checking!');
  }

  getItem(selected) {
    this.addBtnPushed = false;
    console.warn(selected);
    this.selectedItem = selected;
  }

  commitNewItem() {
    console.log(this.itemGroup.value);
  }
}
