import { Component, OnInit} from '@angular/core';
import { AdMob } from '@capacitor-community/admob';


@Component({
  selector: 'app-admob-banner',
  templateUrl: './admob-banner.component.html',
  styleUrl: './admob-banner.component.css'
})
export class AdmobBannerComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
    this.showBanner();
  }

 
  async showBanner() {
    try {
      await AdMob.showBanner({
        adId: 'a-app-pub-3940256099942544/6300978111',
      });
      console.log('Banner ad displayed successfully');
    } catch (error) {
      console.error('Error showing banner:', error);
    }
  }
}
