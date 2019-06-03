import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cart } from './models/cart';
import { appConfig } from './../../config/config';

@Injectable()
export class CartService {
  private API_PATH = appConfig.baseUrl;

  constructor(private http: Http) {}

  getCart(data): Observable<any> {
    return this.http.get(`${this.API_PATH}/carts?filter=${JSON.stringify(data.payload)}`)
    .pipe(map(cartData => {
      return cartData.json();
    }));
  }

  // TODO: post call
  addToCart(productId): Observable<Cart> {
    return this.http.get(`${this.API_PATH}/carts?access_token=${productId}`)
    .pipe(map(data => {
      return new Cart(data);
    }));
  }

  removeFromCart(cartData): Observable<Cart> {
    return this.http.delete(`${this.API_PATH}/carts/${cartData.payload.id}`)
    .pipe(map(data => {
      return data.json();
    }));
  }

  // TODO: delete call
  clearCart(dummy): Observable<Cart> {
    return this.http.get(`${this.API_PATH}/carts`)
    .pipe(map(data => {
      return new Cart(data);
    }));
  }
}
