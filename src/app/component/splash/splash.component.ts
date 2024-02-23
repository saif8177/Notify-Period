// splash.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  notifyPeriodArray: string[] = [];
  showText: boolean = false;

  ngOnInit(): void {
    // Populate notifyPeriodArray with each character of "Notify Period"
    const notifyPeriod = "Notify Period";
    this.notifyPeriodArray = notifyPeriod.split("");

    // Set a timeout to show the text after the animation completes
    setTimeout(() => {
      this.showText = true;
    }, 7000); // Adjust the delay as needed
  }
}
