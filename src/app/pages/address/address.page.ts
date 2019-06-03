import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './../../reducers';
import { GetAddress, Address, RemoveFromAddress, AddressIndexSuccess } from '../../services/address';
import * as AddressService from '../../services/address';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {
  Addresses: Observable<AddressService.Address[]>; // TODO TYPE UPDATE;
  skip = 0;
  limit: Number;
  noData: Boolean;
  isLoading: Boolean;
  constructor(private store: Store<fromRoot.AppState>, private router: Router) {
    this.Addresses = store.select('address', 'results');
   }

  ngOnInit() {
    this.store.select<any>('address').subscribe((selectedState) => {
      this.noData = selectedState.noData;
      this.skip = selectedState.skip ;
      this.limit = selectedState.limit;
      this.isLoading = selectedState.loading;
    });
    this.getAddress({'skip': 0, 'limit': 5});
  }

  getAddress(query): void {
    this.store.dispatch(new GetAddress(query));
  }

  doInfinite(infiniteScroll) {
    if (!this.noData) {
      this.skip += 5;
      this.getAddress({'skip': this.skip, 'limit' : this.limit});
      infiniteScroll.target.complete();
    }
  }

  onDeleteAddress(addressId): void {
    this.store.dispatch(new RemoveFromAddress(addressId));
  }

  onAddressEmit(addressId): void {
    this.store.dispatch(new AddressIndexSuccess(addressId));
  }

  onEditAddressEmit(index): void {
    this.store.dispatch(new AddressIndexSuccess(index));
    this.router.navigate(['/add-address']);
  }

}
