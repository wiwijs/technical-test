import {CategoryInterface} from "../interfaces";
import {categories} from "../mocks";

interface CategoryInterfaceModel {
  id: number;
}

export class CategoryModel implements CategoryInterface {
  id: number;
  category: string;

  constructor(categoryInterface: CategoryInterfaceModel) {
    const category: CategoryInterface = {
      id: categoryInterface.id,
      category: categories.filter(category => category.id === categoryInterface.id)[0].category
    }
    this.id = category.id;
    this.category = category.category;

  }
}
