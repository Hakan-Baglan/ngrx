import { ProductModel } from "./product.model";

export class BasketModel {
    id: number = 0;
    product: ProductModel = new ProductModel();
    quantitiy: number = 0;
}