import { BehaviorSubject } from 'rxjs';
import { NewUserGuard } from './../../core/guards/newUser.guard';
import { Router } from '@angular/router';
import { Status } from './../../public/models/public.interface';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './../../core/services/login.service';
import { Injectable } from '@angular/core';
import { CheckoutPageState } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  private _currentCheckoutPage = new BehaviorSubject<CheckoutPageState[]>([
    { page: 1, state: 'vanish' },
    { page: 2, state: 'vanish' },
    { page: 3, state: 'vanish' },
  ]);
  currentCheckoutPage$ = this._currentCheckoutPage.asObservable();


  private _selectedBookIsbn = new BehaviorSubject<String | undefined>('');
  selectedBookIsbn$ = this._selectedBookIsbn.asObservable();
  constructor(
    private loginService: LoginService,
    private cookieService: CookieService,
    private router: Router,
    private newUserGuard: NewUserGuard
  ) {}

  /**
   * Calls post request when user logs out, to clear cookies and sessions
   * @param none
   * @returns void
   */
  userLogout(): void {
    this.loginService.postLogout(this.cookieService.get('email')).subscribe(
      (data: Status) => {
        if (data.statusCode === 200) {
          this.newUserGuard.newUserStatus.next(true);
          this.cookieService.deleteAll();
          this.router.navigateByUrl('/');
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  /**
   * Helps to set animation status for checkout pages 
   * @param pageStatus CheckoutPageState[]
   * @returns void
   */
  proceedToNext(pageStatus: CheckoutPageState[]): void {
    this._currentCheckoutPage.next(pageStatus);
  }

  /**
   * 
   * @param isbn 
   */
  getBookIsbn(isbn: String | undefined): void{
    this._selectedBookIsbn.next(isbn);
  }
}
