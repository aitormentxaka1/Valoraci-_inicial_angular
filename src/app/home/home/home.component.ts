// home.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListadoComponent } from "../../parametros/listado/listado.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListadoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  constructor(private router: Router) {}

  onLogout() {
    localStorage.removeItem('isLoggedIn'); 
    this.router.navigate(['/login']); 
  }
}
