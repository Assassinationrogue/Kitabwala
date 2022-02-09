import { Stationary, Books, Others } from './../../models/products';
import { AfterContentInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit, AfterContentInit {
  books: Books;
  others: Others;
  itemList: string[] = [];
  @Output() sendBookIsbn = new EventEmitter<String>();
  @Input() set stationary(stationary: Stationary) {
    if (stationary) {
      this.books = stationary.books;
      this.others = stationary['pencils'];
      this.itemList = Object.keys(stationary);
    }
  }
  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {}

  /**
   * Gets ISBN of selected book and emits an it
   * @param isbn String
   */
  getIsbn(isbn: String){
    this.sendBookIsbn.emit(isbn);
  }
}
