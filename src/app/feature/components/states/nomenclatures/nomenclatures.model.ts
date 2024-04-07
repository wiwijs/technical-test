import {CategoryInterface, ProductInterface} from "../../../../shared/interfaces";

export class NomenclaturesStateModel implements NomenclaturesStateModelInterface {
  categories: CategoryInterface[];
  products: ProductInterface[];

  constructor(response: NomenclaturesStateModelInterface) {
    this.categories = response.categories;
    this.products = response.products;
  }
}

export interface NomenclaturesStateModelInterface {
  categories: CategoryInterface[];
  products: ProductInterface[];
}
