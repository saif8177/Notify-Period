import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SplashStateService {
  private shouldDisplaySplash: boolean;
  isSplashAnimationComplete: any;

  constructor() {
    // Retrieve the state from local storage
    this.shouldDisplaySplash = localStorage.getItem('shouldDisplaySplash') !== 'false';
  }

  getShouldDisplaySplash(): boolean {
    return this.shouldDisplaySplash;
  }

  setShouldDisplaySplash(value: boolean): void {
    this.shouldDisplaySplash = value;
    // Save the state to local storage
    localStorage.setItem('shouldDisplaySplash', value.toString());
  }
}
