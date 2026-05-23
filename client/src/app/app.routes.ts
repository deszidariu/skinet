import { Routes } from '@angular/router';
import { ProductList } from './features/shop/product-list/product-list';

export const routes: Routes = [
  { path: 'shop', component: ProductList },
  { path: '', redirectTo: 'shop', pathMatch: 'full' }
];
