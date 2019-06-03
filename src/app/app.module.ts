import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ProductEffects } from './services/product/store/product-effects'; // remove for lazy loading
import { ProductService } from './services/product/'; // remove for lazy loading

import { AuthEffects } from './services/authentication'; // remove for lazy loading
import { AuthService } from './services/authentication';
import { AddressEffects } from './services/address';
import { CartEffects, CartService } from './services/cart';

@NgModule({
  declarations: [ AppComponent ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    StoreModule.forRoot(reducers), // update for lazy loading
    EffectsModule.forRoot([
      ProductEffects,
      AuthEffects,
      AddressEffects,
      CartEffects
    ]), // update for lazy loading
    StoreDevtoolsModule.instrument({
      maxAge: 50
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProductService, // remove for lazy loading
    CartService,
    AuthService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
