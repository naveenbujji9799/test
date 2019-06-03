import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as ProductService from './../../services/product';
import * as fromRoot from './../../reducers';

@Component({
  selector: 'app-showcase',
  templateUrl: 'showcase.page.html',
  styleUrls: ['showcase.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowcasePage implements OnInit {
  products: Observable<ProductService.Product[]>;
  skip: Number = 0;
  limit: Number;
  noData: Boolean;
  loading: Boolean;

  constructor(
    private store: Store<fromRoot.AppState>
  ) {
    this.products = store.select('search', 'results');
  }

  ngOnInit() {
    this.store.select<any>('search').subscribe((selectedState) => {
      this.noData = selectedState.noData;
      this.skip = selectedState.skip;
      this.limit = selectedState.limit;
      this.loading = selectedState.loading;
    });
    this.onSearch({'skip': this.skip, 'limit' : this.limit});

  }

  doInfinite(infiniteScroll) {
    if (!this.noData) {
      this.onSearch({'skip': this.skip, 'limit' : this.limit});
    }
  }

  onSearch(query: any) {
    this.store.dispatch(new ProductService.Search(query));
  }
}
