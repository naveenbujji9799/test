import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ShowcasePage } from './showcase.page';
import { HeaderComponentModule } from '../../components/header/header.module';
import { ShowcaseListingComponentModule } from '../../components/showcase-listing/showcase-listing.module';
import { ProductModule } from './../../services/product'; // update for lazy loading

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderComponentModule,
    ShowcaseListingComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShowcasePage
      }
    ])
  ],
  declarations: [ShowcasePage],
  providers: [
    ProductModule  // update for lazy loading
  ]
})
export class ShowcasePageModule {}
