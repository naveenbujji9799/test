import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PaymentModePage } from './payment-mode.page';
import { PaymentModeComponentModule } from '../../components/payment-mode/payment-mode.module';

const routes: Routes = [
  {
    path: '',
    component: PaymentModePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentModeComponentModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PaymentModePage]
})
export class PaymentModePageModule {}
