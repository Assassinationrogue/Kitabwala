import { map, tap } from 'rxjs/operators';
import { SignupStatus } from './../models/core.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _loginStatus = new BehaviorSubject<boolean>(false);
  private _newRegisteration = new BehaviorSubject<SignupStatus>({
    newUser: true,
    newUserLoggedIn: false,
    existingUser: false,
    existingUserLoggedIn: false,
  });
  loginStatus$ = this._loginStatus.asObservable();
  newRegisteration$: Observable<SignupStatus> =
    this._newRegisteration.asObservable();
  constructor() {}
  getStatus(status: boolean) {
    this._loginStatus.next(status);
  }

  newUserInformation(status: SignupStatus) {
    this._newRegisteration.next(status);
  }

  isNewUser() {
    return this.newRegisteration$.pipe(
      map((status) => {
        if (status.newUser) {
          return true;
        } else if (status.existingUser) {
          return false;
        } else if (status.existingUserLoggedIn) {
          return false;
        } else if (status.newUserLoggedIn) {
          return false;
        } else if (status.existingUser && status.existingUserLoggedIn) {
          return false;
        } else {
          return false;
        }
      })
    )
  }
}
