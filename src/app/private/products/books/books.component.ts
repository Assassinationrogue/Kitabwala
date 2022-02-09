import { UtilityService } from './../../utils/utility.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Books } from './../../models/products';
import {
  Component,
  OnInit,
  Input,
  Renderer2,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'books-product',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  @Output() getIsbn = new EventEmitter<any>();
  bookList: string[] = [];

  private _books: Books;
  get books(): Books {
    return this._books;
  }
  @Input() set books(books: Books) {
    if (books) {
      this.bookList = Object.keys(books);
      this._books = books;
    }
  }
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public utility: UtilityService
  ) {}

  ngOnInit(): void {}

  /**
   * Redirects to product page
   * @param value name of the item
   * @param isbn isbn 10 or isbn 13 for fetching the present data details
   * @returns void
   */
  showBook(
    value: String | undefined,
    bookName: String | undefined,
    isbn: String | undefined
  ): void {
    this.utility.getBookIsbn(isbn);
    this.getIsbn.emit({ isbn: isbn, bookName: bookName });
    this.router.navigate([value], { relativeTo: this.route });
  }

  redirectToCheckoutPage(): void {
    this.router.navigate(['/welcome/checkout']);
  }
}
