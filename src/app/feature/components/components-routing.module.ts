import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsRoutingModule {
}
