import { UtilityService } from './../utils/utility.service';
import { AfterViewChecked, Component, OnInit } from '@angular/core';

// const checkValue = document.querySelector('#qty').eventListeners('change')
// console.log(checkValue)

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, AfterViewChecked {
  totalPrice: number = 0;
  totalQuantity: number = 0;
  items = [
    {
      title: 'Let us C',
      inStock: true,
      author: 'Yashvant Kanetkar',
      type: 'Paperback',
      quantity: 2,
      price: 489,
      totalPrice: 0,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/41wAAnUGmhL.jpg',
    },
    {
      title: 'Anxious people',
      inStock: true,
      author: 'Fradrick Backman',
      type: 'Paperback',
      quantity: 1,
      price: 370,
      totalPrice: 0,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/810XLL7gvRL.jpg',
    },
  ];

  constructor(public utility: UtilityService) {}

  ngOnInit(): void {
    for (let i = 0; i < 2; i++) {
      this.items[i].totalPrice = this.items[i].quantity * this.items[i].price;
      this.totalPrice += this.items[i].totalPrice;
      this.totalQuantity += this.items[i].quantity;
    }
  }

  /**
   * Updates the price and quantity 
   * @param event accepts DOM event
   * @param index of the current target
   */
  showUpdatedItems(event: Event, index: number): void {
    this.items[index].quantity = event!.target!['value'] * 1;
    this.totalPrice = 0;
    this.totalQuantity = 0;

    for (let idx = 0; idx < this.items.length; idx++) {
      this.items[idx].totalPrice = this.items[idx].quantity * this.items[idx].price;
      this.totalPrice += this.items[idx].totalPrice;
      this.totalQuantity += this.items[idx].quantity;
    }
  }

  ngAfterViewChecked(): void {}
}
