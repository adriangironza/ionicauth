import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'resetpassword',
    loadComponent: () => import('./pages/resetpassword/resetpassword.page').then( m => m.ResetpasswordPage)
  },
  {
    path: 'landing',
    loadComponent: () => import('./pages/landing/landing.page').then( m => m.LandingPage)
  },
  {
    path: 'signup',
    loadComponent: () => import('./pages/signup/signup.page').then( m => m.SignupPage)
  },
  {
    path: 'validate',
    loadComponent: () => import('./pages/validate/validate.page').then( m => m.ValidatePage)
  },
  {
    path: 'verify',
    loadComponent: () => import('./pages/verify/verify.page').then( m => m.VerifyPage)
  },
];
