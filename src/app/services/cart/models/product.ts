// TODO: update the model with proper shema
/** Model for product */
export class Product {
    title: string;
    price: string;

    constructor(product) {
        if (product) {
            this.title = product.title;
            this.price = product.price;
        }
    }
}
