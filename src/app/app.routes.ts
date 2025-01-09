import path from 'path';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StartFrameworkComponent } from './start-framework/start-framework.component';
import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  { path: '', component: StartFrameworkComponent, title: 'Home' },
  {
    path: 'start-framework',
    component: StartFrameworkComponent,
    title: 'Home',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    title: 'Protfolio',
  },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: '**', component: ErrorComponent, title: 'Not Found' },
];
