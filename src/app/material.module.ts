import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCalendar, MatDatepickerModule, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {MatCard} from "@angular/material/card";


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
    MatCalendar
  ],
  exports:  [
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerToggle,
    MatNativeDateModule,
    MatCard,
    MatCalendar
  ],
  providers: [
    {
      provide: [STEPPER_GLOBAL_OPTIONS, MAT_DATE_LOCALE],
      useValue: [{ displayDefaultIndicatorType: false }, { useValue: 'en-GB' }],
    },
  ],
})
export class MaterialModule {
}
