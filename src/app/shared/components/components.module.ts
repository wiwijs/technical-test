import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { DatePickerModalComponent } from './date-picker-modal/date-picker-modal.component';
import {MaterialModule} from "../../material.module";



@NgModule({
  declarations: [
    ModalComponent,
    DatePickerModalComponent
  ],
  exports: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ComponentsAuxiliarsModule { }
