import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  constructor() {
    this.isAuthenticated = localStorage.getItem('token') ? true : false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  login(email: string, password: string): boolean {
    if (email === 'aitor@sener.com' && password === '1234') { 
      this.isAuthenticated = true;
      localStorage.setItem('token', 'mi-token');
      return true;
    }
    return false;  
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('token'); 
  }
}
