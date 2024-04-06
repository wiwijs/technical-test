import {CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServicesModule} from "./services/services.module";
import {ComponentsAuxiliarsModule} from "./components/components.module";
import {MaterialModule} from "../material.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServicesModule,
    ComponentsAuxiliarsModule,
    MaterialModule
  ],
  exports: [
    ComponentsAuxiliarsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }

}
