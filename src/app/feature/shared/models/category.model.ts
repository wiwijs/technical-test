import {CategoryInterface} from "../interfaces";

interface CategoryInterfaceModel {
  id: number;
}

export class CategoryModel implements CategoryInterface {
  id: number;
  category: string | undefined;

  constructor(categoryInterface: CategoryInterfaceModel, categoriesInterfaces: CategoryInterface[]) {
    const category: CategoryInterface = {
      id: categoryInterface.id,
      category: categoriesInterfaces.filter(category => category.id === categoryInterface.id)[0].category
    }
    this.id = category.id;
    this.category = category.category;
  }
}
