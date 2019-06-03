import * as fromSearch from './services/product';
import * as fromAuth from './services/authentication';
import * as fromCart from './services/cart';
import * as fromAddress from './services/address';

export interface AppState {
  search: fromSearch.ProductsState; // remove for lazy loading
  authState: fromAuth.AuthState;
  cartState: fromCart.CartState;
  addressState: fromAddress.AddressState;
}

export const reducers = {
  search: fromSearch.productsReducer, // remove for lazy loading
  auth: fromAuth.authReducer, // remove for lazy loading
  cart : fromCart.cartReducer,
  address: fromAddress.addressReducer
};

export function selectResults(state: AppState) {
  return state.search.results;
}
