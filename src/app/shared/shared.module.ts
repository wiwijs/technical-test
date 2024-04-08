import {CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServicesModule} from "./services/services.module";
import {ComponentsAuxiliarsModule} from "./components/components.module";
import {MaterialModule} from "../material.module";
import {PipesModule} from "./pipes/pipes.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServicesModule,
    ComponentsAuxiliarsModule,
    MaterialModule
  ],
  exports: [
    ComponentsAuxiliarsModule,
    PipesModule
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
