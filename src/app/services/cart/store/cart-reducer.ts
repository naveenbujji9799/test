import { Cart } from './../models/cart';
import * as CartActions from './cart-actions';

export interface CartState {
  results: Array<Cart>;
  error: any;
  isProcessing: boolean;
  noData: boolean;
  isLoading: boolean;
  skip: number;
  limit: number;
  cartIndex: number;
}

const initialState: CartState = {
  results: new Array(),
  error: null,
  noData: false,
  isLoading: false,
  skip: 0,
  limit: 5,
  isProcessing : true,
  cartIndex: null
};

export function cartReducer(state = initialState, action: CartActions.All): CartState {
    switch (action.type) {
      case CartActions.GET_CART: {
        return {
          ...state
        };
      }
      case CartActions.GET_CART_SUCCESS: {
        return {
          ...state,
          results: state.results.concat(action.payload),
          error: null,
          isProcessing: false,
          noData: action.payload.length ? false : true,
          isLoading : false,
          skip: state.results.length
        };
      }
      case CartActions.GET_CART_FAILURE: {
        return {
          ...state,
          error: action.payload,
        };
      }
      case CartActions.ADD_ITEM_TO_CART: {
        return {
          ...state,
        };
      }
      case CartActions.ADD_ITEM_TO_CART_SUCCESS: {
        return {
          ...state,
          // results: action.payload,
        };
      }
      case CartActions.REMOVE_ITEM_FROM_CART: {
        return {
          ...state,
          // cartObject: JSON.parse(JSON.stringify(action.payload)),
        };
      }
      case CartActions.REMOVE_ITEM_FROM_CART_SUCCESS: {
        return {
          ...state,
          results: state.results.slice(0, state.cartIndex)
          .concat(state.results.slice(state.cartIndex + 1)),
        };
      }
      case CartActions.CLEAR_CART: {
        return {
          ...state
        };
      }
      case CartActions.CLEAR_CART_SUCCESS: {
        return {
          ...state,
          // result: action.payload
        };
      }

      case CartActions.CART_INDEX_SUCCESS: {
        return {
          ...state,
          cartIndex: action.payload,
        };
      }
      default: {
        return state;
      }
    }
}
