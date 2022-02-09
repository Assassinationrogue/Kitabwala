import { UtilityService } from './../../utils/utility.service';
import { ProductsService } from '../../services/products.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  stationary: any;
  private subscription: Subscription = new Subscription();
  constructor(
    private productsService: ProductsService,
    public utility: UtilityService
  ) {}

  ngOnInit(): void {
    this.getStationary();
  }

  /**
   * get stationary items
   * @param none
   * @returns void
   */
  private getStationary(): void {
    this.subscription.add(
      this.productsService
        .postProducts('stationary')
        .subscribe((stationary) => {
          this.stationary = stationary;
        })
    );
  }

  getBookDetailsByIsbn(bookInfo: any): void {
    this.subscription.add(
      this.productsService
        .postBookIsbn(bookInfo.isbn, bookInfo.bookName)
        .subscribe(
          (data) => {
            console.log(data);
          },
          (err) => {
            console.log(err);
          }
        )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
