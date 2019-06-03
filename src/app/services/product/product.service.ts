/*
 * @Author: Faisal
 * @Date: 2018-10-27 3:30:28
 * @Last Modified by: Faisal
 * @Last Modified time: 2018-10-27 3:30:28
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './models/product';
import { appConfig } from './../../config/config';

@Injectable()
export class ProductService {
    private API_PATH = appConfig.baseUrl;
    constructor(private http: Http) {}

    searchProducts(query = {}): Observable<Product[]> {
        return this.http.get(`${this.API_PATH}/products?filter=${JSON.stringify(query)}`)
        .pipe(map(data => this.generateProductsList(data)));
    }

    generateProductsList(data) {
        const productList = [];
        JSON.parse(data._body).forEach(element => {
            productList.push(new Product(element));
        });
        return productList;
    }
}
