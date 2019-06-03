import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private _router: Router) {}

  ngOnInit() {
  }

  onClick(productid: number){
    this._router.navigate(['/product',productid]);
  }
}
