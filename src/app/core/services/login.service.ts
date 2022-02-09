import { CookieService } from 'ngx-cookie-service';
import { Status } from './../../public/models/public.interface';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { UserInfo } from '../models/core.interface';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  /**
   * Path to api
   */
  private apiUrl: String = environment.apiUrl;
  private apiPort: number = environment.apiPort;
  statusChange = new EventEmitter<boolean>();

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  postUserInfo(userInfo: UserInfo) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    return this.http.post(
      `${this.apiUrl}:${this.apiPort}/user/login`,
      userInfo,
      {
        withCredentials: true,
      }
    );
  }

  postLogout(userInfo: string) {
    return this.http.post(
      `${this.apiUrl}:${this.apiPort}/user/logout`,
      userInfo,
      { withCredentials: true }
    );
  }

  isUserLoggedIn(): boolean{
    let hasEmail = this.cookieService.get('email');
    if(hasEmail){
      return true
    }else{
      return false
    }
  }
}
