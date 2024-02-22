import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Notify_Period';
  showMenuBars: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.showMenuBars = this.shouldShowMenuBars(event.url);
      });
  }

  private shouldShowMenuBars(url: string): boolean {
    // Check if the URL is not empty, login, or signup
    return (
      url.includes('home') ||
      url.includes('card') ||
      url.includes('chart') ||
      url.includes('music') ||
      url.includes('reel')
    );
  }
}
