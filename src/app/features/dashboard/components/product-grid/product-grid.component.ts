import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from '../../../../shared/shared.module';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [TableModule, ButtonModule, SharedModule, DecimalPipe],
  templateUrl: './product-grid.component.html'
})
export class ProductGridComponent {
  products = [
    {
      id: 1,
      name: 'کالای اول',
      price: 120000,
      date: '2024-04-17T12:00:00Z',
    },
    {
      id: 2,
      name: 'کالای دوم',
      price: 98000,
      date: '2024-04-16T10:00:00Z',
    },
  ];

  onEdit(product: any) {
    console.log('Edit: ', product);
  }

  onDelete(product: any) {
    console.log('Delete: ', product);
  }
}
