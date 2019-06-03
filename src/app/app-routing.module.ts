import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'showcase', loadChildren: './pages/showcase/showcase.module#ShowcasePageModule' },
  { path: 'login', loadChildren: './pages/user/auth/login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './pages/user/auth/signup/signup.module#SignupPageModule' },
  { path: 'cart', loadChildren: './pages/cart/cart.module#CartPageModule' },
  { path: 'address', loadChildren: './pages/address/address.module#AddressPageModule' },
  // TODO Remove this
  { path: 'add-address', loadChildren: './pages/add-address/add-address.module#AddAddressPageModule'},
  { path: 'payment-mode', loadChildren: './pages/payment-mode/payment-mode.module#PaymentModePageModule' },
  { path: 'product/:id', component: 'Product-DetailsComponent' },
  // { path: 'product/:id', loadChildren:'app/services/product/product-details.module#Product-DetailsComponentModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
