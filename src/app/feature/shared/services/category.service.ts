import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {CategoryInterface} from "../interfaces";
import {categories} from "../mocks";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() {
  }

  getCategories(): Observable<CategoryInterface[]> {
    return of(categories);
  }
}
