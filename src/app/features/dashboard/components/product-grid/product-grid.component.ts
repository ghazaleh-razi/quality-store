import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { ConfirmationService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { ShamsiDatePipe } from "../../../../shared/pipes/shamsi-date.pipe";

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule, TableModule, ConfirmDialogModule, DialogModule, FormsModule, ShamsiDatePipe],
  providers: [ConfirmationService],
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss'],
})
export class ProductGridComponent {
  @Input() products: any[] = [];

  rowsPerPageOptions = [5, 10, 20];
  editModalVisible = false;
  selectedProduct: any = {};

  constructor(private confirmationService: ConfirmationService) {}

  confirmDelete(product: any): void {
    this.confirmationService.confirm({
      message: `آیا از حذف "${product.name}" اطمینان دارید؟`,
      header: 'تأیید حذف',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'بله',
      rejectLabel: 'خیر',
      acceptButtonStyleClass: 'btn btn-success', 
      rejectButtonStyleClass: 'btn btn-danger', 
      accept: () => {
        this.deleteProduct(product);
      },
    });
  }

  deleteProduct(product: any): void {
    this.products = this.products.filter((p) => p !== product);
  }

  openEditModal(product: any): void {
    this.selectedProduct = { ...product };
    this.editModalVisible = true;
  }

  saveProduct(): void {
    const index = this.products.findIndex((p) => p.id === this.selectedProduct.id);
    if (index !== -1) {
      this.products[index] = { ...this.selectedProduct };
    }
    this.closeEditModal();
  }

  closeEditModal(): void {
    this.editModalVisible = false;
    this.selectedProduct = {};
  }
}