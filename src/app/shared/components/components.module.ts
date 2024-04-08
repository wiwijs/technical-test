import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from './modal/modal.component';
import {DatePickerModalComponent} from './date-picker-modal/date-picker-modal.component';
import {MaterialModule} from "../../material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastComponent} from './toast/toast.component';
import {AlertComponent} from './alert/alert.component';


@NgModule({
  declarations: [
    ModalComponent,
    DatePickerModalComponent,
    ToastComponent,
    AlertComponent
  ],
  exports: [
    ModalComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsAuxiliarsModule {
}
