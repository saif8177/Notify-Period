import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;

  constructor() { }
  
  private _isLoggedIn: boolean = false;

  // Getter method for isLoggedIn property
  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  // Setter method for isLoggedIn property
  setLoggedIn(value: boolean): void {
    this._isLoggedIn = value;
  }

  // Example authentication logic
  authenticate(username: string, password: string): boolean {
    // Hardcoded set of credentials
    const validCredentials = [
      { username: 'admin', password: 'password' },
      { username: 'zz', password: 'zz' }
    ];

    // Check if the provided username and password match any valid credentials
    const isValid = validCredentials.some(credential => {
      return credential.username === username && credential.password === password;
    });

    // If authentication is successful, set isLoggedIn to true
    if (isValid) {
      this.setLoggedIn(true);
      return true;
    } else {
      // If authentication fails, set isLoggedIn to false
      this.setLoggedIn(false);
      return false;
    }
  }
  logout(): void {
    // Example logout logic
    this._isLoggedIn = false; // Set isLoggedIn to false
    // Perform any additional logout tasks such as clearing user data from local storage, etc.
  }
  
}
