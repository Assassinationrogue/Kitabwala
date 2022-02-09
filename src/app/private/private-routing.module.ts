import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { SingleProductComponent } from './products/single-product/single-product.component';
import { ProductsComponent } from './products/products-home/products.component';
import { WelcomePageComponent } from './home/welcome-page/welcome-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'products/:productName',
    component: SingleProductComponent,
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path:'checkout',
    component: CheckoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
