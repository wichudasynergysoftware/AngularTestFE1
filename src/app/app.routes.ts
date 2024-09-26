import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ChemicalRequestComponent } from './chemical-request/chemical-request.component';
import { ChemicalRequest1Component } from './chemical-request1/chemical-request1.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'chemical-request', component: ChemicalRequestComponent },
  { path: 'chemical-request/request', component: ChemicalRequest1Component },
  { path: 'chemical-request/history', component: ChemicalRequest1Component },
  { path: 'about/submenu1', component: AboutComponent },
  { path: 'about/submenu2', component: AboutComponent },
  { path: '**', redirectTo: '/chemical-request/request' },
  { path: '', redirectTo: '/chemical-request/request', pathMatch: 'full' },
];
