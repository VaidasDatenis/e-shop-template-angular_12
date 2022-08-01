import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path:"", component:HomeComponent },
  { path:"single-product", component:SingleProductComponent },
  { path:"cart", component:CartComponent },
  { path:"checkout", component:CheckoutComponent },
  { path:"shop", component:ShopComponent },
  { path:"dashboard", component:DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
