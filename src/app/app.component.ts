import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { StartFrameworkComponent } from './start-framework/start-framework.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    StartFrameworkComponent,
    NavBarComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    ErrorComponent,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'firstAngularAssignment';
}
