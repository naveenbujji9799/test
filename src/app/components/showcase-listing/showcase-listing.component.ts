import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-showcase-listing',
  templateUrl: './showcase-listing.component.html',
  styleUrls: ['./showcase-listing.component.scss']
})
export class ShowcaseListingComponent implements OnInit {
  @Input() products = [];
  added = false;
  quantity = Quantity;
  selectedOption = this.quantity.half;
  constructor() { }

  ngOnInit() {
  }

  addToCart(product, quantity) {
    this.added = true;
    console.log(product, quantity, this.selectedOption);

  }

  selectionChange(event: CustomEvent): void {
    this.selectedOption = event.detail.value;
  }

}

enum Quantity {
  half = '1/2 Liter',
  one = '1 Liter',
  two = '2 Liters',
  three = '3 Liters',
}
