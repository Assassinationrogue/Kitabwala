import { NewUserGuard } from './core/guards/newUser.guard';
import { CookieService } from 'ngx-cookie-service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./public/public.module').then((_module) => _module.PublicModule),
    pathMatch: 'full',
    canActivate: [NewUserGuard],
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./private/private.module').then(
        (_module) => _module.PrivateModule
      ),
    canActivate: [AuthGuard],
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule {}


