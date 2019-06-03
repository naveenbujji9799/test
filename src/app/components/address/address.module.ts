import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [AddressComponent],
  exports: [
    AddressComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AddressComponentModule { }
