import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-add-product-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule],
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss'],
})
export class AddProductModalComponent {
  @Output() productAdded = new EventEmitter<any>();
  @Output() modalClosed = new EventEmitter<void>();

  visible = false;
  newProduct: any = { name: '', price: 0, date: '' };

  open(): void {
    this.newProduct = { name: '', price: 0, date: '' };
    this.visible = true;
  }

  close(): void {
    this.visible = false;
    this.modalClosed.emit();
  }

  addProduct(): void {
    const product = {
      ...this.newProduct,
      id: Date.now(),
      date: new Date().toISOString(),
    };
    this.productAdded.emit(product);
    this.close();
  }
}