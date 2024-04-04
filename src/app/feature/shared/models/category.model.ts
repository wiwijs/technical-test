import {CategoryInterface} from "../interfaces";

interface CategoryInterfaceModel {
  id: number;
}

export class CategoryModel implements CategoryInterface {
  id: number;
  category: string;

  constructor(categoryInterface: CategoryInterfaceModel) {
    const category: CategoryInterface = {
      id: categoryInterface.id,
      category: 'prueba'
    }
    this.id = category.id;
    this.category = category.category;

  }
}
