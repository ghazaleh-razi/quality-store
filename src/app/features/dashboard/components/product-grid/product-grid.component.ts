import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ShamsiDatePipe } from "../../../../shared/pipes/shamsi-date.pipe";

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule, TableModule, ConfirmDialogModule, ShamsiDatePipe],
  providers: [ConfirmationService],
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss'],
})
export class ProductGridComponent {
  @Input() products: any[] = []; 

  rowsPerPageOptions = [5, 10, 20]; 

  constructor(private confirmationService: ConfirmationService) {}

  confirmDelete(product: any): void {
    this.confirmationService.confirm({
      message: `آیا از حذف "${product.name}" اطمینان دارید؟`,
      header: 'تأیید حذف',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteProduct(product);
      },
    });
  }

  deleteProduct(product: any): void {
    this.products = this.products.filter((p) => p !== product);
  }
}