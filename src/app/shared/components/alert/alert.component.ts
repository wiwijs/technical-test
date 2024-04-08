import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ModalInterface} from "flowbite";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {
  @Input() modal: ModalInterface;
  @Input() idProductDelete: number;
  @Output() close = new EventEmitter<{ close: boolean, idProductDelete: number }>();

  accept() {
    this.close.emit({close: true, idProductDelete: this.idProductDelete});
  }

  cancel() {
    this.close.emit({close: false, idProductDelete: this.idProductDelete});
  }
}
