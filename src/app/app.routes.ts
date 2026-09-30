import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'DataArchitect | Home'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
    title: 'DataArchitect | CSR Dashboard'
  },
  {
    path: 'live-gas-prices',
    loadComponent: () => import('./pages/live-prices/live-prices.component').then(m => m.LivePricesComponent),
    title: 'DataArchitect | SSR Live Prices'
  },
  {
    path: 'reports/housing-regression',
    loadComponent: () => import('./pages/reports/reports.component').then(m => m.ReportsComponent),
    title: 'DataArchitect | ISR Housing Report'
  },
  { path: '**', redirectTo: '' }
];
