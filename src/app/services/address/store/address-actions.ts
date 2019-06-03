import { Action } from '@ngrx/store';
import { Address } from '../models/address';

export const ADD_ITEM_TO_ADDRESS = '[Address] Add Item';
export const ADD_ITEM_TO_ADDRESS_SUCCESS = '[Address] Add Item Success';
export const ADD_ITEM_TO_ADDRESS_FAILURE = '[Address] Add Item Failure';

export const GET_ADDRESS = '[Address] Get';
export const GET_ADDRESS_SUCCESS = '[Address] Get Success';
export const GET_ADDRESS_FAILURE = '[Address] Get Failure';

export const UPDATE_ADDRESS = '[Address] Update';
export const UPDATE_ADDRESS_SUCCESS = '[Address] Update Success';
export const UPDATE_ADDRESS_FAILURE = '[Address] Update Failure';

export const REMOVE_ITEM_FROM_ADDRESS = '[Address] Remove Item';
export const REMOVE_ITEM_FROM_ADDRESS_SUCCESS = '[Address] Remove Item Success';
export const REMOVE_ITEM_FROM_ADDRESS_FAILURE = '[Address] Remove Item Failure';

export const ADDRESS_INDEX_SUCCESS = '[Address] Index Success';


export class AddToAddress implements Action {
  readonly type = ADD_ITEM_TO_ADDRESS;

  constructor(public payload: Address) {}
}

export class AddToAddressSuccess implements Action {
  readonly type = ADD_ITEM_TO_ADDRESS_SUCCESS;

  constructor(public payload: Address) {}
}

export class AddToAddressFailure implements Action {
  readonly type = ADD_ITEM_TO_ADDRESS_FAILURE;

  constructor(public payload: null) {}
}
export class GetAddress implements Action {
  readonly type = GET_ADDRESS;

  constructor(public payload: any) {}
}

export class GetAddressSuccess implements Action {
  readonly type = GET_ADDRESS_SUCCESS;

  constructor(public payload: Array<Address>) {}
}

export class GetAddressFailure implements Action {
  readonly type = GET_ADDRESS_FAILURE;

  constructor(public payload: null) {}
}

export class UpdateAddress implements Action {
  readonly type = UPDATE_ADDRESS;

  constructor(public payload: Address) {}
}

export class UpdateAddressSuccess implements Action {
  readonly type = UPDATE_ADDRESS_SUCCESS;

  constructor(public payload: Address) {}
}
export class UpdateAddressFailure implements Action {
  readonly type = UPDATE_ADDRESS_FAILURE;

  constructor(public payload: null) {}
}

export class RemoveFromAddress implements Action {
  readonly type = REMOVE_ITEM_FROM_ADDRESS;

  constructor(public payload: string) {}
}

export class RemoveFromAddressSuccess implements Action {
  readonly type = REMOVE_ITEM_FROM_ADDRESS_SUCCESS;

  constructor(public payload: Address) {}
}

export class RemoveFromAddressFailure implements Action {
  readonly type = REMOVE_ITEM_FROM_ADDRESS_FAILURE;

  constructor(public payload: null) {}
}

export class AddressIndexSuccess implements Action {
  readonly type = ADDRESS_INDEX_SUCCESS;

  constructor(public payload: null) {}
}

export type All
  = AddToAddress
  | AddToAddressSuccess
  | AddToAddressFailure
  | GetAddress
  | GetAddressSuccess
  | GetAddressFailure
  | UpdateAddress
  | UpdateAddressSuccess
  | UpdateAddressFailure
  | RemoveFromAddress
  | RemoveFromAddressSuccess
  | RemoveFromAddressFailure
  | AddressIndexSuccess;
