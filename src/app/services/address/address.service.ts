import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Address } from './models/address';
import { appConfig } from '../../../app/config/config';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private API_PATH = appConfig.baseUrl;

  constructor(private http: Http) {}

  postAddress (data): Observable<Address> {
    return this.http.post(`${this.API_PATH}/addresses?access_token=${data.token}`, data.payload)
    .pipe(map(address => new Address(address)));
  }

  getAddress (query): Observable<Address[]> {
    return this.http.get(`${this.API_PATH}/addresses?access_token=${query.token}?filter=${JSON.stringify(query.payload)}`)
    .pipe(map(address => {
      return address.json();
    }));
  }

  removeAddress (addressData): Observable<any> {
    return this.http.delete(`${this.API_PATH}/addresses/${addressData.payload}?access_token=${addressData.token}`)
    .pipe(map(address => {
      return address.json();
    }));
  }

  updateAddress (data): Observable<Address> {
    return this.http.put(`${this.API_PATH}/addresses/${data.id}?access_token=${data.token}`, data.payload)
    .pipe(map(address => new Address(address)));
  }
}
