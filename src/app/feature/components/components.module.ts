import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ComponentsRoutingModule} from "./components-routing.module";
import {StatesModule} from "./states/states.module";
import {MaterialModule} from "../../material.module";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    StatesModule,
    MaterialModule,
    SharedModule,
    FormsModule
  ]
})
export class ComponentsModule {
}
