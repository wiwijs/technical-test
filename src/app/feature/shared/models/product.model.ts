import {CategoryInterface, ProductInterface} from "../interfaces";
import {CategoryModel} from "./category.model";

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


export class ProductModel implements ProductInterface {
  id: number;
  name: string;
  category: CategoryInterface[];
  brand: string;
  creation_date: string;
  available: boolean;

  constructor(productInterface: ProductModelInterface) {
    this.id = productInterface.id;
    this.name = productInterface.name;
    this.category = productInterface.category.map(category => new CategoryModel(category));
    this.brand = productInterface.brand;
    this.creation_date = productInterface.creation_date;
    this.available = productInterface.available;
  }
}
