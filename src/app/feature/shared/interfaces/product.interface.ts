import {CategoryInterface} from "./category.interface";

export interface ProductInterface {
  id: number;
  name: string;
  category: CategoryInterface;
  brand: string;
  creation_date: string;
  available: boolean;
}
