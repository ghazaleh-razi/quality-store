import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ProductGridComponent } from '../../components/product-grid/product-grid.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { NewProductButtonComponent } from '../../components/new-product-button/new-product-button.component';
import { AddProductModalComponent } from '../../components/add-product-modal/add-product-modal.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ProductGridComponent, HeaderComponent, NewProductButtonComponent, AddProductModalComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild(AddProductModalComponent) addProductModal!: AddProductModalComponent;

  products: any[] = [];
  newProductCount = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/products.json').subscribe((data) => {
      this.products = data.map((product) => ({
        ...product,
        date: new Date(product.date).toISOString(),
      }));
    });
  }

  openAddModal(): void {
    this.addProductModal.open();
  }

  handleProductAdded(product: any): void {
    this.products = [...this.products, product];
    this.newProductCount++;
  }
}