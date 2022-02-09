import { UtilityService } from './../../utils/utility.service';
import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'shipping-information',
  templateUrl: './shipping-information.component.html',
  styleUrls: ['./shipping-information.component.scss'],
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
          opacity: '0',
          transform: 'translateX(300px)',
        })
      ),
      state(
        'previous',
        style({
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
      transition('normal => previous', animate('.5s ease-out')),
    ]),
  ],
})
export class ShippingInformationComponent implements OnInit {
  state = 'nomral';
  constructor(public utility: UtilityService) {}

  ngOnInit(): void {}

  onAnimate() {
    this.utility.proceedToNext([
      { page: 1, state: 'previous' },
      { page: 2, state: 'normal' },
      { page: 3, state: 'vanish' },
    ]);
    this.utility.currentCheckoutPage$.subscribe((checkout) => {
      this.state = checkout[0]?.state;
      console.log(this.state)
    });
  }
}
