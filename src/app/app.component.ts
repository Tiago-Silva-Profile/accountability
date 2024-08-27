import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeLugsComponent } from './lugs/home-lugs/home-lugs.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeLugsComponent,
    MainComponent,
    HeaderComponent,
    SideNavComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'accountability-ui';
}
