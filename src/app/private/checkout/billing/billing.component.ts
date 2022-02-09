import { trigger, state, style, transition, animate } from '@angular/animations';
import { UtilityService } from './../../utils/utility.service';
import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
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
      transition('next => normal', animate('.3s ease-in')),
    ]),
  ],
})
export class BillingComponent implements OnInit, AfterContentInit {
  state = 'vanish';

  constructor(public utility: UtilityService) {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.utility.currentCheckoutPage$.subscribe((checkout) => {
      this.state = checkout[1]?.state;
    });
  }

  onPrevious() {
    this.utility.currentCheckoutPage$.subscribe((checkout) => {
      this.state = checkout[1]?.state;
    });

    this.utility.proceedToNext([
      { page: 1, state: 'normal' },
      { page: 2, state: 'previous' },
      { page: 3, state: 'vanish' },
    ]);
  }

  onNext() {
    this.utility.proceedToNext([
      { page: 1, state: 'vanish' },
      { page: 2, state: 'next' },
      { page: 3, state: 'normal' },
    ]);

    this.utility.currentCheckoutPage$.subscribe((checkout) => {
      this.state = checkout[1]?.state;
    });
  }
}
