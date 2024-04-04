import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../shared/services/product.service";
import {CategoryInterface, ProductInterface} from "../../shared/interfaces";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  products: ProductInterface[];
  date_creation: Date;

  constructor(private productService: ProductService) {
    this.date_creation = new Date();
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products
    });
  }

  getCategories(categories: CategoryInterface[])  {
    return categories.map(category => category.category);
  }
}
