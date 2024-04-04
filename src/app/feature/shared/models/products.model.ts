import {ProductInterface, ProductsInterface} from "../interfaces";
import {ProductModel} from "./product.model";

interface ProductModelInterface {
  id: number;
  name: string;
  category: CategoryModelInterface[];
  brand: string;
  creation_date: string;
  available: boolean;
}

interface CategoryModelInterface {
  id: number;
}

export class ProductsModel implements ProductsInterface {

  product: ProductInterface[];

  constructor(products: ProductModelInterface[]) {
    this.product = products.map(x => new ProductModel(x));
  }
}
