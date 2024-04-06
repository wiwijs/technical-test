import {Component} from '@angular/core';
import {InstanceOptions, Modal, ModalInterface, ModalOptions} from "flowbite";
import {convertDate} from "../../functions";
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

  constructor(private fb: FormBuilder) {
  }

  showModal() {
    const $modalElement: HTMLElement = document.querySelector('#timepicker-modal') as HTMLElement;

    const modalOptions: ModalOptions = {
      placement: 'bottom-right',
      backdrop: 'dynamic',
      backdropClasses:
        'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
      closable: true,
      onHide: () => {
        console.log('modal is hidden');
      },
      onShow: () => {
        console.log('modal is shown');
      },
      onToggle: () => {
        console.log('modal has been toggled');
      },
    };

// instance options object
    const instanceOptions: InstanceOptions = {
      id: 'timepicker-modal',
      override: true
    };

    const modal: ModalInterface = new Modal($modalElement, modalOptions, instanceOptions);

    modal.show();
  }

  submit() {
    if(!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    convertDate(this.form.controls['dateProduct'].value, this.form.controls['timeProduct'].value);
  }

  updateFormDate(value: any) {
    this.form.controls['dateProduct'].setValue(value);
  }

}
