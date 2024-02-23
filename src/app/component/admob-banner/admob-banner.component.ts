import { Component, OnInit } from '@angular/core';
import { AdMob, BannerAdPosition } from '@capacitor-community/admob';

@Component({
  selector: 'app-admob-banner',
  templateUrl: './admob-banner.component.html',
  styleUrl: './admob-banner.component.css',
})
export class AdmobBannerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.showBanner();
  }
 

  async showBanner() {
    try {
      const adId = this.getAdId(); // Get the appropriate ad ID based on the platform
      const isiOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
      const adSize = isiOS ? 'SMART_BANNER' : 0; // Set ad size based on platform
      await AdMob.showBanner({
        adId: adId,
        
       
        margin: 0,
      });
      console.log('Banner ad displayed successfully');
    } catch (error) {
      console.error('Error showing banner:', error);
    }
  }

  // Helper method to get the appropriate ad ID based on the platform
  private getAdId(): string {
    // Determine the platform (iOS or Android)
    const isiOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
    if (isiOS) {
      return 'ca-app-pub-3940256099942544/6300978111'; // iOS ad ID
    } else {
      return 'ca-app-pub-3940256099942544/6300978111'; // Android ad ID
    }
  }
}
