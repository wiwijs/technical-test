import {Injectable} from '@angular/core';
import {Observable, of, Subject} from "rxjs";
import {products} from "../mocks";
import {ProductInterface} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productSubject = new Subject<ProductInterface | null>();
  productSubject$ = this.productSubject.asObservable();

  constructor() {
  }

  getProducts(): Observable<ProductInterface[]> {
    return of(products);
  }
}
