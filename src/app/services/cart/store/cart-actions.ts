import { Action } from '@ngrx/store';
import { Cart } from '../models/cart';

export const GET_CART = '[Cart] Get';
export const GET_CART_SUCCESS = '[Cart] Get Success';
export const GET_CART_FAILURE = '[Cart] Get Failure';

export const ADD_ITEM_TO_CART = '[Cart] Add Item';
export const ADD_ITEM_TO_CART_SUCCESS = '[Cart] Add Item Success';
export const ADD_ITEM_TO_CART_FAILURE = '[Cart] Add Item Failure';

export const REMOVE_ITEM_FROM_CART = '[Cart] Remove Item';
export const REMOVE_ITEM_FROM_CART_SUCCESS = '[Cart] Remove Item Success';
export const REMOVE_ITEM_FROM_CART_FAILURE = '[Cart] Remove Item Failure';

export const CLEAR_CART = '[Cart] Clear';
export const CLEAR_CART_SUCCESS = '[Cart] Clear Success';
export const CLEAR_CART_FAILURE = '[Cart] Clear Failure';

export const CART_INDEX_SUCCESS = '[Cart] Index Success';

export class GetCart implements Action {
  readonly type = GET_CART;
// TODO Change payload type
  constructor(public payload: any) {}
}

export class GetCartSuccess implements Action {
  readonly type = GET_CART_SUCCESS;

  constructor(public payload: Array<Cart>) {}
}

export class GetCartFailure implements Action {
  readonly type = GET_CART_FAILURE;

  constructor(public payload: null) {}
}

export class AddToCart implements Action {
  readonly type = ADD_ITEM_TO_CART;

  constructor(public payload: string) {}
}

export class AddToCartSuccess implements Action {
  readonly type = ADD_ITEM_TO_CART_SUCCESS;

  constructor(public payload: Cart) {}
}
export class AddToCartFailure implements Action {
  readonly type = ADD_ITEM_TO_CART_FAILURE;

  constructor(public payload: null) {}
}

export class RemoveFromCart implements Action {
  readonly type = REMOVE_ITEM_FROM_CART;

  constructor(public payload: Object) {}
}

export class RemoveFromCartSuccess implements Action {
  readonly type = REMOVE_ITEM_FROM_CART_SUCCESS;

  constructor(public payload: any) {}
}
export class RemoveFromCartFailure implements Action {
  readonly type = REMOVE_ITEM_FROM_CART_FAILURE;

  constructor(public payload: null) {}
}
export class ClearCart implements Action {
  readonly type = CLEAR_CART;

  constructor() {}
}

export class ClearCartSuccess implements Action {
  readonly type = CLEAR_CART_SUCCESS;

  constructor(public payload: Cart) {}
}
export class ClearCartFailure implements Action {
  readonly type = CLEAR_CART_FAILURE;

  constructor(public payload: null) {}
}

export class CartIndex implements Action {
  readonly type = CART_INDEX_SUCCESS;

  constructor(public payload: number) {}
}

export type All
  = GetCart
  | GetCartSuccess
  | GetCartFailure
  | AddToCart
  | AddToCartSuccess
  | RemoveFromCart
  | RemoveFromCartSuccess
  | RemoveFromCartFailure
  | ClearCart
  | ClearCartSuccess
  | CartIndex;
