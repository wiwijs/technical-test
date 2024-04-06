import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductService} from "./product.service";
import {CategoryService} from "./category.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ProductService, CategoryService]
})
export class ServicesModule {
}
