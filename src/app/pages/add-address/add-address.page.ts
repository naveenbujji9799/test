import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from './../../reducers';
import { AddToAddress, Address } from '../../services/address/index';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit {
  addAddressForm: FormGroup;
  phoneNumberPattern = '^[6789][0-9]*$';
  pincodePattern = '^[1-9][0-9]{5}$';
  addressData: Address;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<fromRoot.AppState>
  ) {
    this.addAddressForm = this.formBuilder.group({
      fullName : ['', Validators.compose([Validators.required])],
      phoneNumber: ['', Validators.compose([Validators.required,
                        Validators.pattern(this.phoneNumberPattern),
                        Validators.minLength(10),
                        Validators.maxLength(10)
                      ])],
      pincode: ['', Validators.compose([Validators.required,
                    Validators.pattern(this.pincodePattern),
                    Validators.minLength(6),
                    Validators.maxLength(6) ])],
      addressLine1: ['', Validators.compose([Validators.required])],
      addressLine2: ['', Validators.compose([Validators.required])],
      landmark: ['', Validators.compose([Validators.required])],
      city: ['', Validators.compose([Validators.required])],
      state: ['', Validators.compose([Validators.required])],
      country: ['', Validators.compose([Validators.required])],
      addressType: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
    this.loadExistingAddressData();
    this.loadAddressDataToForm();
  }

  addAddress() {
    const payload = this.addAddressForm.value;
    this.store.dispatch(new AddToAddress(payload));
  }

  loadExistingAddressData (): void {
   this.store.select('address').subscribe((selectedState) => {
      if (selectedState.addressIndex == null) {
        this.addressData = null;
      } else {
        this.addressData = selectedState.results[selectedState.addressIndex];
      }
   });
  }

  loadAddressDataToForm () {
    if (this.addressData) {
      this.addAddressForm = this.formBuilder.group({
        fullName : [this.addressData.fullName, Validators.compose([Validators.required])],
        phoneNumber: [this.addressData.phoneNumber, Validators.compose([Validators.required,
                          Validators.pattern(this.phoneNumberPattern),
                          Validators.minLength(10),
                          Validators.maxLength(10)
                        ])],
        pincode: [this.addressData.pincode, Validators.compose([Validators.required,
                      Validators.pattern(this.pincodePattern),
                      Validators.minLength(6),
                      Validators.maxLength(6) ])],
        addressLine1: [this.addressData.addressLine1, Validators.compose([Validators.required])],
        addressLine2: [this.addressData.addressLine2, Validators.compose([Validators.required])],
        landmark: [this.addressData.landmark, Validators.compose([Validators.required])],
        city: [this.addressData.city, Validators.compose([Validators.required])],
        state: [this.addressData.state, Validators.compose([Validators.required])],
        country: [this.addressData.country, Validators.compose([Validators.required])],
        addressType: [this.addressData.addressType, Validators.compose([Validators.required])]
      });
    }
  }
}
