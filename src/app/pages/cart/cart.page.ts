import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as CartService from './../../services/cart';
import * as fromRoot from './../../reducers';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cart: Observable<CartService.Cart>;
  skip = 0;
  limit: Number;
  noData: Boolean;
  isLoading: Boolean;
  constructor(private store: Store<fromRoot.AppState>) {
    this.cart = store.select('cart', 'results');
  }

  ngOnInit() {
    this.store.select<any>('cart').subscribe((selectedState) => {
      this.noData = selectedState.noData;
      this.skip = selectedState.skip ;
      this.limit = selectedState.limit;
      this.isLoading = selectedState.loading;
    });
    this.getCart({'skip': 0, 'limit': 5});
  }

  getCart(query): void {
    this.store.dispatch(new CartService.GetCart(query));
  }

  doInfinite(infiniteScroll) {
    if (!this.noData) {
      this.skip += 5;
      this.getCart({'skip': this.skip, 'limit' : this.limit});
      infiniteScroll.target.complete();
    }
  }

  onDeleteCart(event): void {
    this.store.dispatch(new CartService.RemoveFromCart(event));
  }

  emitIndex(i): void {
    this.store.dispatch(new CartService.CartIndex(i));
  }

}
