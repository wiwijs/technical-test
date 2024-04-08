import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  @Input() success: boolean;
  @Input() message:  string;
  @Output() close = new EventEmitter<boolean>();

  closeToast()  {
  this.close.emit(false);
  }
}
