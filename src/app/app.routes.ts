import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: '/colony', pathMatch: 'full' },
  {
    path: 'auth',
    children: [
      { //path: 'login',    loadComponent: () => import('./auth/login/login').then(m => m.Login) },
        path: 'login',    loadComponent: () => import('./auth/login/login').then(m => m.Login) },
      { path: 'register', loadComponent: () => import('./auth/register/register').then(m => m.Register) },
      { path: '',         redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  {
    path: 'colony',
    canActivate: [authGuard],
    children: [
      { path: '',    loadComponent: () => import('./colony/colony-list/colony-list').then(m => m.ColonyList) },
      { path: ':id', loadComponent: () => import('./colony/colony-detail/colony-detail').then(m => m.ColonyDetail) }
    ]
  },
  { path: '**', redirectTo: '/colony' }
];
