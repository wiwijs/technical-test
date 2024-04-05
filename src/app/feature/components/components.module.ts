import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ComponentsRoutingModule} from "./components-routing.module";
import {StatesModule} from "./states/states.module";


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    StatesModule
  ]
})
export class ComponentsModule {
}
