// splash.component.ts

import { Component, OnInit } from '@angular/core';
import { SplashStateService } from '../splash-state.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  constructor(private splashStateService: SplashStateService) {}
  notifyPeriodArray: string[] = [];
  showText: boolean = false;

  ngOnInit(): void {
    // Populate notifyPeriodArray with each character of "Notify Period"
    const notifyPeriod = "Notify Period";
    this.notifyPeriodArray = notifyPeriod.split("");
    this.splashStateService.setShouldDisplaySplash(true);

    // Set a timeout to show the text after the animation completes
    setTimeout(() => {
      this.showText = true;
    }, 6000); // Adjust the delay as needed
  }
}
