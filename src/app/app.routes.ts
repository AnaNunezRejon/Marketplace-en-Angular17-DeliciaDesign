import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

export const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: "", component: ProductListComponent },
      { path: 'producto/:id', component: ProductViewComponent }
    ]
  },
  { path: 'carrito', component: CarritoComponent },
  {
    path: '**', redirectTo: 'login'
  }
];
