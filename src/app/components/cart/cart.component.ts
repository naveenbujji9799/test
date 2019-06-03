import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() cartArray;
  @Output() cartObject = new EventEmitter();
  @Output() cartIndex = new EventEmitter();
  quantity;
  constructor() { }

  ngOnInit() {
  }

  onDeleteCart(event): void {
    this.cartObject.emit(event);
  }

  emitIndex(i): void {
    this.cartIndex.emit(i);
  }

}
