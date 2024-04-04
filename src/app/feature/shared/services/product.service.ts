import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {products} from "../mocks";
import {ProductModel} from "../models";
import {ProductInterface} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getProducts(): Observable<ProductInterface[]> {
    return of(products.map(product => new ProductModel(product)));
  }
}
