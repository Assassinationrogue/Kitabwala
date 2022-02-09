import { UtilityService } from './../../utils/utility.service';
import { Status } from './../../../public/models/public.interface';
import { LoginService } from './../../../core/services/login.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
  providers: [CookieService],
})
export class WelcomePageComponent implements OnInit {
  constructor(
    public utility: UtilityService
  ) {}

  ngOnInit(): void {
    //console.log(this.cookieService.deleteAll());
  }

  
}
