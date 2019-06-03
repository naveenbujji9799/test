import { Address } from '../models/address';
import * as AddressActions from './address-actions';

export interface AddressState {
  results: Array<Address>;
  error: any;
  isProcessing: boolean;
  noData: boolean;
  loading: boolean;
  skip: number;
  limit: number;
  addressIndex: number;
}

const initialState: AddressState = {
  results: new Array(), // TODO UPDATE TYPE
  error: null,
  noData: false,
  loading: false,
  skip: 0,
  limit: 5,
  isProcessing : true,
  addressIndex: null
};

export function addressReducer(state = initialState, action: AddressActions.All): AddressState {
    switch (action.type) {

/*       case AddressActions.ADD_ITEM_TO_ADDRESS: {
        return {
          ...state,
          isProcessing: true,
          result: null,
          error: null
        };
      }
      case AddressActions.ADD_ITEM_TO_ADDRESS_SUCCESS: {
        console.log('action reducer payload', action.payload);
        return {
          ...state,
          result: action.payload,
          isProcessing: false,
          error: null
        };
      }
      case AddressActions.ADD_ITEM_TO_ADDRESS_FAILURE: {
        return {
          ...state,
          result: null,
          isProcessing: false,
          error: action.payload
        };
      } */

      case AddressActions.GET_ADDRESS: {
        return {
          ...state
        };
      }
      case AddressActions.GET_ADDRESS_SUCCESS: {
        return {
          ...state,
          results: state.results.concat(action.payload),
          error: null,
          isProcessing: false,
          noData: action.payload.length ? false : true,
          loading : false,
          skip: state.results.length
        };
      }
      case AddressActions.GET_ADDRESS_FAILURE: {
        return {
          ...state,
          results: null,
          error: action.payload,
          isProcessing: false,
          noData: true,
          loading : false,
          skip: state.results.length
        };
      }

      case AddressActions.UPDATE_ADDRESS: {
        return {
          ...state
        };
      }
      case AddressActions.UPDATE_ADDRESS_SUCCESS: {
        return {
          ...state,
          // results: action.payload
        };
      }
      case AddressActions.ADDRESS_INDEX_SUCCESS: {
        return {
          ...state,
          addressIndex: action.payload,
        };
      }

      case AddressActions.REMOVE_ITEM_FROM_ADDRESS: {
        return {
          ...state
        };
      }
      case AddressActions.REMOVE_ITEM_FROM_ADDRESS_SUCCESS: {
        return {
          ...state,
          results: state.results.slice(0, state.addressIndex)
          .concat(state.results.slice(state.addressIndex + 1)),
        };
      }

      default: {
        return state;
      }
    }
}
