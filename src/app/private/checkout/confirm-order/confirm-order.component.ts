import { UtilityService } from './../../utils/utility.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss'],
  animations: [
    trigger('divState', [
      state(
        'normal',
        style({
          display: 'block',
          opacity: '1',
          transform: 'translateX(0px)',
        })
      ),
      state(
        'next',
        style({
          display: 'none',
          opacity: '0',
          transform: 'translateX(300px)',
        })
      ),
      state(
        'previous',
        style({
          display: 'none',
          opacity: '0',
          transform: 'translateX(-300px)',
        })
      ),
      state(
        'vanish',
        style({
          display: 'none',
          opacity: '0',
          transform: 'translateX(300px)',
        })
      ),
      transition('normal => next', animate('.3s ease-out')),
      transition('previous => normal', animate('.3s ease-in')),
    ]),
  ],
})
export class ConfirmOrderComponent implements OnInit, AfterViewInit {
  state = 'vanish';
  constructor(public utility: UtilityService) {}

  ngOnInit(): void {}

  onPrevious() {
    this.utility.currentCheckoutPage$.subscribe((checkout) => {
      this.state = checkout[2]?.state;
    });

    this.utility.proceedToNext([
      { page: 1, state: 'vanish' },
      { page: 2, state: 'normal' },
      { page: 3, state: 'vanish' },
    ]);
  }

  onNext() {
    this.utility.proceedToNext([
      { page: 1, state: 'normal' },
      { page: 2, state: 'vanish' },
      { page: 3, state: 'vanish' },
    ]);

    // this.utility.currentCheckoutPage$.subscribe((checkout) => {
    //   this.state = checkout[2]?.state;
    // });
  }

  ngAfterViewInit(): void {
    this.utility.currentCheckoutPage$.subscribe((checkout) => {
      this.state = checkout[2]?.state;
    });
  }
}
