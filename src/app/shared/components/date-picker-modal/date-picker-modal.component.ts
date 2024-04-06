import {Component} from '@angular/core';
import {InstanceOptions, Modal, ModalInterface, ModalOptions} from "flowbite";
import {convertDate} from "../../functions";

@Component({
  selector: 'app-date-picker-modal',
  templateUrl: './date-picker-modal.component.html',
  styleUrl: './date-picker-modal.component.scss'
})
export class DatePickerModalComponent {
  selected: any;
  value: any;

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

  test() {
    console.log(this.value)
    convertDate(this.selected, this.value);
  }

}
