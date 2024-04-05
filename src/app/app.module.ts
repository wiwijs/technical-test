import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FeatureRoutingModule} from "./feature/feature-routing.module";
import {StatesModule} from "./feature/components/states/states.module";
import {SharedModule} from "./feature/shared/shared.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureRoutingModule,
    StatesModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
