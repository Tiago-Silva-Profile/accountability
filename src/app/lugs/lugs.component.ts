import { Component } from '@angular/core';
import { HomeLugsComponent } from "./home-lugs/home-lugs.component";

@Component({
  selector: 'app-lugs',
  standalone: true,
  imports: [
    HomeLugsComponent,
  ],
  templateUrl: './lugs.component.html',
  styleUrl: './lugs.component.css'
})
export class LugsComponent {

}
