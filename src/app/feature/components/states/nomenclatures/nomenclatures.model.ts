import {CategoryInterface, ProductInterface} from "../../../../shared/interfaces";

export class NomenclaturesStateModel implements NomenclaturesStateModelInterface {
  products: ProductInterface[];
  categories: CategoryInterface[];

  constructor(response: NomenclaturesStateModelInterface) {
    this.products = response.products;
    this.categories = response.categories;
  }
}

export interface NomenclaturesStateModelInterface {
  products: ProductInterface[];
  categories: CategoryInterface[];
}
