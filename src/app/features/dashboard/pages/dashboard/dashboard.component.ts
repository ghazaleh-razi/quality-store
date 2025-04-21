import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ProductGridComponent } from '../../components/product-grid/product-grid.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../../../../shared/components/header/header.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ProductGridComponent, DialogModule, FormsModule, HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  products: any[] = [];
  addModalVisible = false;
  newProduct: any = { name: '', price: 0, date: '' };
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
    this.newProduct = { name: '', price: 0, date: '' };
    this.addModalVisible = true;
  }

  addProduct(): void {
    const newProduct = {
      ...this.newProduct,
      id: this.products.length + 1,
      date: new Date().toISOString(),
    };
    this.products = [...this.products, newProduct];
    this.newProductCount++; 
    this.closeAddModal();
  }

  closeAddModal(): void {
    this.addModalVisible = false;
  }
}