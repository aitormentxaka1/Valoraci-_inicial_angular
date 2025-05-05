// login.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.email === 'aitor@sener.com' && this.password === '1234') {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/home']); 
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
