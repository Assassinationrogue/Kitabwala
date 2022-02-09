import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  ActivatedRoute,
} from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NewUserGuard implements CanActivate {
  newUserStatus = new BehaviorSubject<boolean>(false);
  newUserStatus$ = this.newUserStatus.asObservable();
  constructor(
    private router: Router,
    private cookieService: CookieService,
    private activatedRoute: ActivatedRoute
  ) {
    this.newUserStatus.next(!cookieService.get('email').includes('@'));
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.newUserStatus$.pipe(
      tap((status) => {
        if (status) {
          return status;
        } else {
          this.router.navigate(['welcome'], {
            relativeTo: this.activatedRoute,
          });
          return status;
        }
      })
    );
  }
}
