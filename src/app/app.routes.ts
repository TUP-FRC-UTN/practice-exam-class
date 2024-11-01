import { Routes } from '@angular/router';
import { CreateOrderComponent } from './create-order/create-order.component';
import { ListOrderComponent } from './list-order/list-order.component';

export const routes: Routes = [
  { path: 'create-order', component: CreateOrderComponent },
  { path: 'orders', component: ListOrderComponent },
  { path: '', redirectTo: '/create-order', pathMatch: 'full' },
];