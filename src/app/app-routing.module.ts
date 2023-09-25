import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'personal-website',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: '',
    pathMatch: 'full',
    component: AboutComponent,
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'experience',
    loadComponent: () => import('./experience/experience.component').then(m => m.ExperienceComponent),
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./portfolio/portfolio.component').then(m => m.PortfolioComponent),
  },
  {
    path: 'style',
    loadComponent: () => import('./style/style.component').then(m => m.StyleComponent)
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
