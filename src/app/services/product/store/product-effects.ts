import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';

import { ProductService } from './../product.service';
import * as ProductActions from './product-actions';

@Injectable()
export class ProductEffects {
  @Effect()
  search$: Observable<Action> = this.actions$.ofType(ProductActions.SEARCH)
    .pipe(map((action: ProductActions.Search) => action.payload))
    .pipe(switchMap(params => this.productService.searchProducts(params)))
    .pipe(map(results => new ProductActions.SearchSuccess(results)));

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
