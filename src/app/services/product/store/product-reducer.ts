import { Product } from './../models/product';
import * as ProductActions from './product-actions';

export interface ProductsState {
  categoryId: string;
  results: Product[];
  noData: Boolean;
  loading: Boolean;
  skip: Number;
  limit: Number;
}

const initialState: ProductsState = {
  categoryId: '',
  results: [],
  noData : false,
  loading: false,
  skip: 0,
  limit: 5,
};

export function productsReducer(state = initialState, action: ProductActions.All): ProductsState {
    switch (action.type) {
      case ProductActions.SEARCH: {
        const categoryId = action.payload;
        return {
          ...state,
          categoryId: action.payload,
          loading : true
        };
      }

      case ProductActions.SEARCH_SUCCESS: {
        return {
          ...state,
          results: state.results.concat(action.payload),
          noData: action.payload.length ? false : true,
          loading : false,
          skip: state.results.length
        };
      }

      default: {
        return state;
      }
    }
}
