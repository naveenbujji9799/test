import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Address } from '../../services/address/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-component',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Input() Addresses: Array<Address>;
  @Output() addressId = new EventEmitter();
  @Output() addressIndex = new EventEmitter();
  @Output() editAddressIndex = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToAddAddressPage(): void {
    this.router.navigateByUrl('/add-address');
  }

  ondeleteAddress(addressObj, i): void {
    this.addressIndex.emit(i);
    this.addressId.emit(addressObj.id);
  }

  onEditAddress(i): void {
    this.editAddressIndex.emit(i);
  }

}
