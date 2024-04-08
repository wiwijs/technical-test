import {Component, Input} from '@angular/core';
import {SelectSnapshot} from "@ngxs-labs/select-snapshot";
import {NomenclaturesState} from "../../../feature/components/states/nomenclatures";
import {NomenclaturesStateModelInterface} from "../../../feature/components/states/nomenclatures/nomenclatures.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ModalInterface} from "flowbite";
import {CategoryInterface, ProductInterface} from "../../interfaces";
import {ProductService} from "../../services/product.service";
import {Emittable, Emitter} from "@ngxs-labs/emitter";

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
        dateProduct: ['', Validators.required],
        availableProduct: [false]
    });

    errorButtonDate = false;
    @Input() modal: ModalInterface;
    update = false;
    productId = 0;

    @Emitter(NomenclaturesState.createProduct)
    public createProduct: Emittable<ProductInterface>;
    @Emitter(NomenclaturesState.updateProduct)
    public updateProduct: Emittable<ProductInterface>;

    showToast = false;
    success = false;
    messageToast = '';

    constructor(private fb: FormBuilder, private productService: ProductService) {
        this.productService.productSubject$.subscribe(product => {
            if (product !== null) {
                this.form.controls['nameProduct'].setValue(product.name);
                this.form.controls['brandProduct'].setValue(product.brand);
                this.form.controls['categoriesProduct'].setValue(product.category.map((category: CategoryInterface) => {
                    return category.id
                }));
                this.form.controls['dateProduct'].setValue(product.creation_date);
                this.form.controls['availableProduct'].setValue(product.available);
                this.productId = product.id;
                this.update = true;
            }
        })
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
        let product: ProductInterface = {
            name: this.form.controls['nameProduct'].value,
            brand: this.form.controls['brandProduct'].value,
            category: [],
            creation_date: this.form.controls['dateProduct'].value,
            available: this.form.controls['availableProduct'].value,
            id: this.productId
        }
        const categoriesId = this.form.controls['categoriesProduct'].value;
        categoriesId.map((id: number) => {
            product.category.push(
                {
                    id: id
                });
        })
        if (this.update) {
            this.updateProduct.emit(product);
            this.messageToast = 'Producto editado correctamente';
        } else {
            this.createProduct.emit(product);
            this.messageToast = 'Producto creado correctamente'
        }

        this.showToast = true;
        this.success = true;
        this.closeModal();
    }

    closeModal() {
        this.modal.hide();
        this.form.reset();
        this.errorButtonDate = false;
        this.update = false;
        this.productId = 0;
        this.productService.productSubject.next(null);
        let interval = setInterval(() => {
            this.closeToast(false, interval);
        }, 3000)
    }

    closeToast($event: boolean, interval?: number) {
        this.showToast = $event;
        clearInterval(interval);
    }
}
