import {Component} from '@angular/core';
import {CategoryInterface} from "../../shared/interfaces";
import {SelectSnapshot} from "@ngxs-labs/select-snapshot";
import {NomenclaturesState} from "../states/nomenclatures";
import {NomenclaturesStateModelInterface} from "../states/nomenclatures/nomenclatures.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  date_creation: Date;
  @SelectSnapshot(NomenclaturesState) public productState: NomenclaturesStateModelInterface;

  constructor() {
    this.date_creation = new Date();
  }

  getCategories(categories: CategoryInterface[]) {
    return categories.map(category => category.category);
  }
}
