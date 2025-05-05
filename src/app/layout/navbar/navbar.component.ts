// navbar.component.ts
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  constructor(private router: Router, private auth:AuthService) {}

  onLogout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return this.auth.isLoggedIn();
  }
}

