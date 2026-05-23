import { Component, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../../shared/models/product';

@Component({
  selector: 'app-product-list',
  imports: [CurrencyPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {
  baseUrl = 'http://localhost:5000/api/';
  products = signal<Product[]>([]);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Product[]>(this.baseUrl + 'products').subscribe({
      next: response => {
        console.log(response);
        this.products.set(response);
      },
      error: error => console.error(error),
    });
  }
}
