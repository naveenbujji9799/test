import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddAddressPage } from './add-address.page';
import { AddAddressComponentModule } from '../../components/add-address/add-address.module';

const routes: Routes = [
  {
    path: '',
    component: AddAddressPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AddAddressComponentModule,
    ReactiveFormsModule
  ],
  declarations: [AddAddressPage]
})
export class AddAddressPageModule {}
