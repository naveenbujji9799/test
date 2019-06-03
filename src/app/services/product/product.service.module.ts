
// TODO: update commented lines for lazyloading
import { NgModule } from '@angular/core';
import { ProductDetailsComponent } from './product-details.component';
// import { EffectsModule } from '@ngrx/effects';
// import { ProductEffects } from './product-effects';

@NgModule({
    imports: [
        // EffectsModule.forRoot([ProductEffects])
    ],
    declarations: [ProductDetailsComponent]
})

export class ProductModule {}

