import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ProductGridComponent } from '../../components/product-grid/product-grid.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ProductGridComponent], 
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @Input() products: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/products.json').subscribe((data) => {
      this.products = data.map((product) => ({
        ...product,
        date: new Date(product.date).toISOString(),
      }));
    });
  }
}