import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-product-button',
  standalone: true,
  templateUrl: './new-product-button.component.html',
  styleUrls: ['./new-product-button.component.scss']
})
export class NewProductButtonComponent {
  @Output() clickEvent = new EventEmitter<void>();

  onClick(): void {
    this.clickEvent.emit();
  }
}