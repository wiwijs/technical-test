import {Component, Input} from '@angular/core';
import {SelectSnapshot} from "@ngxs-labs/select-snapshot";
import {NomenclaturesState} from "../../../feature/components/states/nomenclatures";
import {NomenclaturesStateModelInterface} from "../../../feature/components/states/nomenclatures/nomenclatures.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ModalInterface} from "flowbite";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @SelectSnapshot(NomenclaturesState) public categoriesState: NomenclaturesStateModelInterface;

  form: FormGroup = this.fb.group({
    nameProduct: ['', Validators.required],
    categoriesProduct: [[], Validators.required],
    brandProduct: ['', Validators.required],
    dateProduct: ['', Validators.required]
  });

  errorButtonDate = false;
  @Input() modal: ModalInterface;

  constructor(private fb: FormBuilder) {
  }

  getDate($event: string) {
    this.form.controls['dateProduct'].setValue($event);
  }

  submit() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      this.errorButtonDate = true;
      return;
    }
    this.closeModal();
  }

  closeModal() {
    this.modal.hide();
    this.form.reset();
    this.errorButtonDate = false;
  }
}
