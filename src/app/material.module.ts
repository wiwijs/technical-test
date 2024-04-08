import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCalendar, MatDatepickerModule, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {MatCard} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerToggle,
    MatNativeDateModule,
    MatCard,
    MatCalendar,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerToggle,
    MatNativeDateModule,
    MatCard,
    MatCalendar,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [
    {
      provide: [STEPPER_GLOBAL_OPTIONS, MAT_DATE_LOCALE],
      useValue: [{displayDefaultIndicatorType: false}, {useValue: 'es-ES'}],
    },
  ],
})
export class MaterialModule {
}
