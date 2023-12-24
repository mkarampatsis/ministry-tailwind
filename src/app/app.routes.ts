import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: 'home',
  loadComponent: () => import('./components/landing/landing.component').then(m => m.LandingComponent)
},
{
  path: 'responsibilities',
  loadComponent: () => import('./components/tab-page/tab-page.component').then(m => m.TabPageComponent)
},
{
  path: 'responsibilities/organizations',
  loadComponent: () => import('./components/tab-page/organizations/organizations.component').then(m => m.OrganizationsComponent)
},
{
  path: 'responsibilities/organization/units',
  loadComponent: () => import('./components/tab-page/organization-units/organization-units.component').then(m => m.OrganizationUnitsComponent)
},
{
  path: 'responsibilities/search',
  loadComponent: () => import('./components/tab-page/search/search.component').then(m => m.SearchComponent)
},
{
  path: 'law',
  loadComponent: () => import('./components/law/law.component').then(m => m.LawComponent)
},
{
  path: 'contact',
  loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent)
}];
