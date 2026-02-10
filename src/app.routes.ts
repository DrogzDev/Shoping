// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {
    path: '',
    loadComponent: () =>
      import('./app/shared/components/shell/shell').then(m => m.ShellComponent),
    canActivateChild: [],
    children: [
      // Privadas (cualquier usuario autenticado)
      {
        path: 'home',
        canActivate: [],
        loadComponent: () =>
          import('./app/home/home').then(m => m.HomeComponent),
      },
      {
        path: 'alertas',
        canActivate: [],
        loadComponent: () =>
          import('./app/home/alerta').then(m => m.AlertasComponent),
      },

      // ✅ Solo staff o grupo VENDEDOR
      {
        path: 'products',
        canActivate: [],
        loadComponent: () =>
          import('./app/products/products-list').then(m => m.ProductsListComponent),
      },
      {
        path: 'products/new',
        canActivate: [],
        loadComponent: () =>
          import('./app/products/product-new').then(m => m.ProductNewComponent),
      },
      {
        path: 'products/:id',
        canActivate: [],
        loadComponent: () =>
          import('./app/products/product-detail').then(m => m.ProductDetailComponent),
      },
      {
        path: 'sales',
        canActivate: [],
        loadComponent: () =>
          import('./app/products/product-sales').then(m => m.ProductsSalesComponent),
      },

      // Redirección wildcard
      { path: '**', redirectTo: 'home' },
    ],
  },
];
