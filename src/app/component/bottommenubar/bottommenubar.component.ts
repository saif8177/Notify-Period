import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottommenubar',
  templateUrl: './bottommenubar.component.html',
  styleUrl: './bottommenubar.component.css'
})
export class BottommenubarComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

}
