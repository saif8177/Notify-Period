import { Component, HostListener, Inject, PLATFORM_ID  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {
  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }
 
  minContentHeight!: number;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.setMinContentHeight();
  }

  @HostListener('window:resize')
  onResize() {
    this.setMinContentHeight();
  }

  private setMinContentHeight() {
    if (isPlatformBrowser(this.platformId)) {
      this.minContentHeight = window.innerHeight - 100; // Adjust as needed, 64 is an example value for the height of your toolbar
      document.body.style.overflow = 'hidden';
    }
  }
}
