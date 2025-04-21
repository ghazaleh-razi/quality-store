import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ShamsiDatePipe } from "../../../../shared/pipes/shamsi-date.pipe";

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule, TableModule, ShamsiDatePipe],
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss'],
})
export class ProductGridComponent {
  @Input() products: any[] = []; 

  rowsPerPageOptions = [5, 10, 20]; 
}