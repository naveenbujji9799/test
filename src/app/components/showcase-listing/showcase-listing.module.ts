import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ShowcaseListingComponent } from './showcase-listing.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [ShowcaseListingComponent],
  exports: [
    ShowcaseListingComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ShowcaseListingComponentModule {}
