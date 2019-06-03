import { Action } from '@ngrx/store';
import { Product } from '../models/product';

export const SEARCH = '[Products] Search';
export const SEARCH_SUCCESS = '[Products] Search Success';

export class Search implements Action {
  readonly type = SEARCH;

  constructor(public payload: string) {}
}

export class SearchSuccess implements Action {
  readonly type = SEARCH_SUCCESS;

  constructor(public payload: Product[]) {}
}

export type All
  = Search
  | SearchSuccess;
