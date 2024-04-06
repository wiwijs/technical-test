import {Component, EventEmitter, Input, Output} from '@angular/core';
import {InstanceOptions, Modal, ModalInterface, ModalOptions} from "flowbite";
import {convertDate, convertStingToDate} from "../../functions";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-date-picker-modal',
  templateUrl: './date-picker-modal.component.html',
  styleUrl: './date-picker-modal.component.scss'
})
export class DatePickerModalComponent {
  form: FormGroup = this.fb.group({
    dateProduct: [new Date(), Validators.required],
    timeProduct: ['00:00', Validators.required]
  });
  modal: ModalInterface;
  @Output() date: EventEmitter<string> = new EventEmitter<string>();
  @Input() setDate: string;
  @Input() errorButtonDate: boolean;

  constructor(private fb: FormBuilder) {
  }

  showModal() {
    const $modalElement: HTMLElement = document.querySelector('#timepicker-modal') as HTMLElement;

    const modalOptions: ModalOptions = {
      placement: 'bottom-right',
      backdrop: 'dynamic',
      backdropClasses:
        'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
      closable: true
    };

    const instanceOptions: InstanceOptions = {
      id: 'timepicker-modal',
      override: true
    };

    this.modal = new Modal($modalElement, modalOptions, instanceOptions);

    if (this.setDate !== '') {
      this.form.controls['dateProduct'].setValue(convertStingToDate(this.setDate).date);
      this.form.controls['timeProduct'].setValue(convertStingToDate(this.setDate).time);
    }

    this.modal.show();
  }

  submit() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    this.date.emit(convertDate(this.form.controls['dateProduct'].value, this.form.controls['timeProduct'].value));
    this.errorButtonDate = false;
    this.closeModal();
  }

  updateFormDate(value: any) {
    this.form.controls['dateProduct'].setValue(value);
  }

  closeModal() {
    this.resetForm();
    this.modal.hide();
  }

  resetForm() {
    this.form.controls['dateProduct'].setValue(new Date());
    this.form.controls['timeProduct'].setValue('00:00')
  }
}
