import { UserService } from './../services/user.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private _isAuthorized = new BehaviorSubject<boolean>(false);
  isAuthorized$ = this._isAuthorized.asObservable();
  constructor(
    private userService: UserService,
    private cookieService: CookieService
  ) {
    this._isAuthorized.next(cookieService.get('email').toLowerCase().includes('@'));
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isAuthorized$.pipe(
      tap(status=>{
        return status
      })
    )
  }
}
