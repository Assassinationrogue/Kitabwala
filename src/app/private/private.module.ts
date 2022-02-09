import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { WelcomePageComponent } from './home/welcome-page/welcome-page.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsComponent } from './products/products-home/products.component';
import { BooksComponent } from './products/books/books.component';
import { OthersComponent } from './products/others/others.component';
import { SingleProductComponent } from './products/single-product/single-product.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StepsModule } from 'primeng/steps';
import { ShippingInformationComponent } from './checkout/shipping-information/shipping-information.component';
import { BillingComponent } from './checkout/billing/billing.component';
import { ConfirmOrderComponent } from './checkout/confirm-order/confirm-order.component';


@NgModule({
  declarations: [
    PrivateComponent,
    WelcomePageComponent,
    ProductsListComponent,
    ProductsComponent,
    BooksComponent,
    OthersComponent,
    SingleProductComponent,
    CartComponent,
    CheckoutComponent,
    ShippingInformationComponent,
    BillingComponent,
    ConfirmOrderComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StepsModule
  ]
})
export class PrivateModule { }
