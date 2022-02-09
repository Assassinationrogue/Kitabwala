import { Subscription } from 'rxjs';
import { LoginService } from './../../../core/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Fields } from './../../models/public.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [CookieService],
})
export class LoginComponent implements OnInit, OnDestroy {
  fields: Fields;
  fg: FormGroup;
  private subscription: Subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    private userService: UserService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.fields = this.activatedRoute.snapshot.data?.fieldConfig?.loginForm;
    this.fg = this.createForm();
  }

  /**
   * Creates a dynamic form with null value using api to set the disability status
   * and field required to be field
   * @returns FormGroup
   */
  private createForm(): FormGroup {
    const controls = {};
    Object.keys(this.fields).forEach((field) => {
      controls[field] = [
        {
          value: null,
          disabled: this.fields[field]?.readonly,
        },
        this.fields[field].required ? Validators.required : null,
      ];
    });

    return new FormBuilder().group(controls);
  }

  /**
   * Posts user information to api to get the redirects to main page
   */
  onSubmit(): void {
    this.subscription.add(
      this.loginService.postUserInfo(this.fg.getRawValue()).subscribe(
        (data) => {
          if (data['statusCode'] === 200) {
            this.userService.getStatus(true);
            this.router.navigate(['/welcome']);
            this.userService.newUserInformation({
              newUser: false,
              existingUser: true,
              existingUserLoggedIn: true,
              newUserLoggedIn: true,
            });
            this.cookieService.set(
              'email',
              `${this.fg.controls['emailAddress'].value}`
            );
          } else {
            this.userService.getStatus(false);
            this.userService.newUserInformation({
              newUser: true,
              existingUser: false,
              existingUserLoggedIn: false,
              newUserLoggedIn: false,
            });
          }
        },
        (err) => {
          this.fg.controls.password.reset();
          window.alert('You have entered wrong password!');
          this.userService.newUserInformation({
            newUser: false,
            existingUser: true,
            existingUserLoggedIn: false,
            newUserLoggedIn: false,
          });
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
