// TODO: update the model with proper schema
/** Model for product */

import { Product } from './product';
export class Cart {
    total: string;
    cartItems: Product[];
    discount: string;

    constructor(cart) {
        if (cart) {
            this.total = cart.total;
            this.discount = cart.discount;
            this.cartItems = [];
            if (cart.cartItems) {
                cart.cartItems.forEach(cartItem => {
                    this.cartItems.push(new Product(cartItem));
                });
            }
        }
    }
}
