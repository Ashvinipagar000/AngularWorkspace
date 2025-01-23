import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  login() {
    this.loggedIn = true; // Implement your login logic
  }

  logout() {
    this.loggedIn = false; // Implement your logout logic
  }

  isAuthenticated(): boolean {
    return this.loggedIn; // Return the authentication status
  }
}
