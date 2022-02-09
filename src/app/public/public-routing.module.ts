import { LoginGuard } from './../core/guards/login-guard.guard';
import { NewUserGuard } from './../core/guards/newUser.guard';

import { SignupComponent } from './page/signup/signup.component';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditabilityResolver } from './services/editability.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'login',
    component: LoginComponent,
    resolve: {
      fieldConfig: EditabilityResolver,
    },
    canActivate: [LoginGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
    resolve: { fieldConfig: EditabilityResolver },
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
