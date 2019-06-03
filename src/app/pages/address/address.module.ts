import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddressPage } from './address.page';
import { AddressComponentModule } from '../../components/address/address.module';

const routes: Routes = [
  {
    path: '',
    component: AddressPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AddressComponentModule
  ],
  declarations: [AddressPage]
})
export class AddressPageModule {}
