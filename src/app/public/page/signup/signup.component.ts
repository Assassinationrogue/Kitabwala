import { Subscription } from 'rxjs';
import { UserService } from './../../../core/services/user.service';
import { RegisterationService } from './../../services/Registeration.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Fields } from './../../models/public.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signup-page',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit, OnDestroy {
  fields: Fields;
  fg: FormGroup;
  private subscription: Subscription = new Subscription();
  constructor(
    private registerationService: RegisterationService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fields = this.route.snapshot.data?.fieldConfig?.signupForm;
    this.fg = this.createForm();
  }

  /**
   * Generates a form with null value
   * @param none parameter is accepted by the function
   * @returns FormGroup
   */
  private createForm(): FormGroup {
    const controls = {};
    if (this.fields) {
      Object.keys(this.fields).forEach((field) => {
        controls[field] = [
          {
            value: null,
            disabled: this.fields[field]?.readonly,
          },
          this.fields[field]?.required ? Validators.required : null,
        ];
      });
    }

    return new FormBuilder().group(controls);
  }

  /**
   * Submits data
   */
  onSubmit(): void {
    this.fg.markAllAsTouched();
    this.subscription.add(
      this.registerationService
        .postSignupCredentials(this.fg.getRawValue())
        .subscribe(
          (data) => {
            if (data.statusCode === 200) {
              this.userService.getStatus(true);
              this.userService.newUserInformation({
                newUser: false,
                existingUser: false,
                existingUserLoggedIn: true,
                newUserLoggedIn: true,
              });
              this.router.navigate(['/welcome']);
            } else {
              window.alert(data.message);
              this.userService.newUserInformation({
                newUser: false,
                existingUser: true,
                existingUserLoggedIn: true,
                newUserLoggedIn: true,
              });
              this.userService.getStatus(false);
            }
          },
          (err) => {
            console.log(err);
          }
        )
    );
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
