import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, takeUntil, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';

import { CartService } from './../cart.service';
import * as CartActions from './cart-actions';
import { Cart } from '../models/cart';

@Injectable()
export class CartEffects {

  @Effect()
  getCart$: Observable<Action> = this.actions$.pipe(
    ofType(CartActions.GET_CART),
    switchMap( (payload) => {
      const ongetCart$ = this.actions$.pipe(
          ofType(CartActions.GET_CART)
        );

      return this.cartService.getCart(payload).pipe(
          takeUntil(ongetCart$),
          map(
              (cart: Array<Cart>) => new CartActions.GetCartSuccess(cart)
            ),
          catchError(error =>
              of(new CartActions.GetCartFailure(error))
              )
          );
        })
  );

  @Effect()
  addItemToCart$: Observable<Action> = this.actions$.ofType(CartActions.ADD_ITEM_TO_CART)
    .pipe(map((action: CartActions.AddToCart) => action.payload))
    .pipe(switchMap(params => this.cartService.addToCart(params)))
    .pipe(map(results => new CartActions.AddToCartSuccess(results)));

    @Effect()
    removeItemFromCart$: Observable<Action> = this.actions$.pipe(
      ofType(CartActions.REMOVE_ITEM_FROM_CART),
      switchMap( (payload) => {
        const onremoveCart$ = this.actions$.pipe(
            ofType(CartActions.REMOVE_ITEM_FROM_CART)
          );

        return this.cartService.removeFromCart(payload).pipe(
            takeUntil(onremoveCart$),
            map(
                (cart: any) => new CartActions.RemoveFromCartSuccess(cart)
              ),
            catchError(error =>
                of(new CartActions.RemoveFromCartFailure(error))
                )
            );
          })
    );

  @Effect()
  clearCart$: Observable<Action> = this.actions$.ofType(CartActions.CLEAR_CART)
    .pipe(map((action: CartActions.ClearCart) => action))
    .pipe(switchMap(params => this.cartService.clearCart(params)))
    .pipe(map(results => new CartActions.ClearCartSuccess(results)));

  constructor(
    private actions$: Actions,
    private cartService: CartService
  ) {}
}
