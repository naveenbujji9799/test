import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentModeComponent } from './payment-mode.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [PaymentModeComponent],
  exports: [
    PaymentModeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PaymentModeComponentModule { }
