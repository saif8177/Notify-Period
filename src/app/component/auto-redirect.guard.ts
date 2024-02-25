import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SplashStateService } from './splash-state.service';

@Injectable({
  providedIn: 'root',
})
export class AutoRedirectGuard implements CanActivate {
  constructor(private router: Router, private splashStateService: SplashStateService) {}

  canActivate(): boolean {
    setTimeout(() => {
      this.splashStateService.setShouldDisplaySplash(false);
      this.router.navigate(['/login']);
    }, 5000); // Change the timeout to 5000 milliseconds (5 seconds)

    return true;
  }
}
