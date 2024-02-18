import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
[x: string]: any;

constructor(private router: Router) {}

navigateToRegister() {
  this.router.navigate(['register']);
}

}
