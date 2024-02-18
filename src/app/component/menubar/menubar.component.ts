import { Component, ElementRef, HostListener, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatDrawer } from '@angular/material/sidenav';


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
  drawerOpened = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.setMinContentHeight();
  }

  @ViewChild('drawer') drawer!: MatDrawer;
  @ViewChild('menubar') menubar!: ElementRef;

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
  
  toggleDrawer() {
    this.drawer.toggle(); // Use toggle method to open/close the drawer
    this.drawerOpened = !this.drawerOpened;
    console.log('Drawer state:', this.drawerOpened); // Log the state of drawerOpened variable
  }

 
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (isPlatformBrowser(this.platformId)) {
      const targetElement = event.target as Node;
      const clickedInsideDrawer = this.drawer.opened && this.drawer._content.nativeElement.contains(targetElement);
      if (!clickedInsideDrawer && this.drawerOpened) {
        this.drawer.close();
        this.drawerOpened = true;
      }
    }
  }
}
