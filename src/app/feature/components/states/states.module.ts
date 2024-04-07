import {NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders} from '@angular/core';
import {NgxsModule} from '@ngxs/store';
import {NgxsEmitPluginModule} from '@ngxs-labs/emitter';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {NgxsSelectSnapshotModule} from '@ngxs-labs/select-snapshot';
import {environment} from "../../../../environments/environment.development";
import {NomenclaturesState} from "./nomenclatures";

@NgModule({
  declarations: [],
  imports: [
    NgxsModule.forRoot([
      NomenclaturesState
    ], {developmentMode: !environment.production}),
    NgxsStoragePluginModule.forRoot({
      storage: 0,
      key: [
        'nomenclatures',
      ],
      serialize: JSON.stringify,
      deserialize: JSON.parse,
      beforeSerialize: function (obj) {
        return obj;
      },
      afterDeserialize: function (obj) {
        return obj;
      }
    }),
    NgxsEmitPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    }),
    NgxsSelectSnapshotModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StatesModule {
  static forRoot(): ModuleWithProviders<StatesModule> {
    return {
      ngModule: StatesModule,
      providers: []
    };
  }
}
