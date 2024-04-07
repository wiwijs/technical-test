import {Component, ViewChild} from '@angular/core';
import {CategoryInterface, ProductInterface} from "../../../shared/interfaces";
import {SelectSnapshot} from "@ngxs-labs/select-snapshot";
import {NomenclaturesState} from "../states/nomenclatures";
import {NomenclaturesStateModelInterface} from "../states/nomenclatures/nomenclatures.model";
import {Modal, ModalOptions, ModalInterface, InstanceOptions} from 'flowbite';
import {MatMenuTrigger} from "@angular/material/menu";
import {ProductService} from "../../../shared/services/product.service";
import {Emittable, Emitter} from "@ngxs-labs/emitter";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  @SelectSnapshot(NomenclaturesState) public nomenclatures: NomenclaturesStateModelInterface;
  modal: ModalInterface;

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }

  @Emitter(NomenclaturesState.deleteProduct)
  public deleteProduct: Emittable<number>;

  constructor(private productService: ProductService) {
  }

  getCategories(categories: CategoryInterface[]) {
    return categories.map(category => category.category);
  }

  openModal(product?: ProductInterface) {
    const $modalElement: HTMLElement = document.querySelector('#crud-modal') as HTMLElement;

    const modalOptions: ModalOptions = {
      placement: 'bottom-right',
      backdrop: 'dynamic',
      backdropClasses:
        'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
      closable: false,
    };

// instance options object
    const instanceOptions: InstanceOptions = {
      id: 'crud-modal',
      override: true
    };

    this.modal = new Modal($modalElement, modalOptions, instanceOptions);

    if (product) {
      this.productService.productSubject.next(product);
    }

    this.modal.show();
  }

  removeProduct(id: number) {
    this.deleteProduct.emit(id);
  }
}
