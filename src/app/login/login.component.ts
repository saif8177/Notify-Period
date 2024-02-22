import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  [x: string]: any;
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  navigateToRegister() {
    this.router.navigate(['signup']);
  }

  login(): void {
    // Call the authenticate method from the AuthService to authenticate the user
    const isAuthenticated = this.authService.authenticate(
      this.username,
      this.password
    );

    // If authentication is successful, navigate to the home route
    if (isAuthenticated) {
      this.router.navigate(['home']);
    } else {
      // If authentication fails, display an error message
      this.error = 'Invalid username or password';
    }
  }
}
