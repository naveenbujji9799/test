import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, takeUntil, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';

import { AddressService } from './../address.service';
import * as AddressActions from './address-actions';
import { Address } from '../models/address';

@Injectable()
export class AddressEffects {
    @Effect()
    addItemToAddress$: Observable<Action> = this.actions$.pipe(
      ofType(AddressActions.ADD_ITEM_TO_ADDRESS),
      switchMap( (payload) => {

        const onAddItemtoAddress$ = this.actions$.pipe(
            ofType(AddressActions.ADD_ITEM_TO_ADDRESS)
          );

        return this.addressService.postAddress(payload).pipe(
            takeUntil(onAddItemtoAddress$),
            map(
                (address: Address) => new AddressActions.AddToAddressSuccess(address)
                ),
            catchError(error =>
                of(new AddressActions.AddToAddressFailure(error))
                )
            );
          })
    );

    @Effect()
    getAddress$: Observable<Action> = this.actions$.pipe(
      ofType(AddressActions.GET_ADDRESS),
      switchMap( (payload) => {

        const ongetAddress$ = this.actions$.pipe(
            ofType(AddressActions.GET_ADDRESS)
          );

        return this.addressService.getAddress(payload).pipe(
            takeUntil(ongetAddress$),
            map(
                (address: Array<Address>) => new AddressActions.GetAddressSuccess((address))
              ),
            catchError(error =>
                of(new AddressActions.GetAddressFailure(error))
                )
            );
          })
    );
    // TODO Update Correct Models and Actions
    @Effect()
    updateAddress$: Observable<Action> = this.actions$.pipe(
      ofType(AddressActions.UPDATE_ADDRESS),
      switchMap( (payload) => {

        const onupdateAddress$ = this.actions$.pipe(
            ofType(AddressActions.UPDATE_ADDRESS)
          );

        return this.addressService.updateAddress(payload).pipe(
            takeUntil(onupdateAddress$),
            map(
                (address: any) => new AddressActions.UpdateAddressSuccess((address))
              ),
            catchError(error =>
                of(new AddressActions.UpdateAddressFailure(error))
                )
            );
          })
    );
    // TODO Update Correct Models and Actions
    @Effect()
    removeAddress$: Observable<Action> = this.actions$.pipe(
      ofType(AddressActions.REMOVE_ITEM_FROM_ADDRESS),
      switchMap( (payload) => {

        const onremoveAddress$ = this.actions$.pipe(
            ofType(AddressActions.REMOVE_ITEM_FROM_ADDRESS)
          );

        return this.addressService.removeAddress(payload).pipe(
            takeUntil(onremoveAddress$),
            map(
                (address: any) => new AddressActions.RemoveFromAddressSuccess((address))
              ),
            catchError(error =>
                of(new AddressActions.RemoveFromAddressFailure(error))
                )
            );
          })
    );

  constructor(
    private actions$: Actions,
    private addressService: AddressService
  ) {}
}
