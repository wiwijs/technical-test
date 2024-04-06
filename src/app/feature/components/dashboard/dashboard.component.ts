import {Component} from '@angular/core';
import {CategoryInterface} from "../../../shared/interfaces";
import {SelectSnapshot} from "@ngxs-labs/select-snapshot";
import {NomenclaturesState} from "../states/nomenclatures";
import {NomenclaturesStateModelInterface} from "../states/nomenclatures/nomenclatures.model";
import {Modal, ModalOptions, ModalInterface, InstanceOptions} from 'flowbite';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  date_creation: Date;
  @SelectSnapshot(NomenclaturesState) public productState: NomenclaturesStateModelInterface;
  modal: ModalInterface;

  constructor() {
    this.date_creation = new Date();
  }

  getCategories(categories: CategoryInterface[]) {
    return categories.map(category => category.category);
  }

  openModal() {
    const $modalElement: HTMLElement = document.querySelector('#crud-modal') as HTMLElement;

    const modalOptions: ModalOptions = {
      placement: 'bottom-right',
      backdrop: 'dynamic',
      backdropClasses:
        'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
      closable: true,
    };

// instance options object
    const instanceOptions: InstanceOptions = {
      id: 'crud-modal',
      override: true
    };

    this.modal = new Modal($modalElement, modalOptions, instanceOptions);

    this.modal.show();
  }
}
