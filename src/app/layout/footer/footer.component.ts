import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from "../../home/home/home.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
