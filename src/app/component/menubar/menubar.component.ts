import { Component, ElementRef, HostListener, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatDrawer } from '@angular/material/sidenav';
import { BottommenubarComponent } from '../bottommenubar/bottommenubar.component';


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
  drawerOpened = false;
  

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.setMinContentHeight();
  }

  @ViewChild('drawer') drawer!: MatDrawer;
  @ViewChild('menubar') menubar!: ElementRef;
  @ViewChild(BottommenubarComponent) bottomMenubar!: BottommenubarComponent;


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
    if (this.drawer) {
      this.drawer.toggle(); // Use toggle method to open/close the drawer
      this.drawerOpened = !this.drawerOpened;
      console.log('Drawer state:', this.drawerOpened); // Log the state of drawerOpened variable
    }
  }
  
 

//   @HostListener('document:click', ['$event'])
//   onDocumentClick(event: MouseEvent) {
//     if (!this.drawer.opened) {
//       return;
//     }
//     const targetElement = event.target as HTMLElement;
//     const clickedInsideDrawer = this.drawer._elementRef.nativeElement.contains(targetElement);
//     if (!clickedInsideDrawer) {
//       this.drawer.close();
//       this.drawerOpened = false;
//     }
//   }
CloseDrawerOnBackdropClick(){
  if(this.drawerOpened){
    this.drawer.close();
    this.drawerOpened = false;
  }
}

closeDrawerFromBottomMenu() {
  if (this.drawerOpened) {
    this.drawer.close();
    this.drawerOpened = false;
  }
}
closeDrawer() {
  this.CloseDrawerOnBackdropClick();
}
  
@HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.drawer || !this.drawerOpened) {
      return;
    }

    const targetElement = event.target as HTMLElement;
    const clickedInsideDrawer = this.drawer.opened && this.drawer._content.nativeElement.contains(targetElement);
    const clickedOnMenuButton = this.menubar.nativeElement.contains(targetElement);
    const clickedOnBottomMenubar = this.bottomMenubar && this.bottomMenubar.nativeElement.contains(targetElement); 
    if (!clickedInsideDrawer && !clickedOnMenuButton && !clickedOnBottomMenubar) { // Updated this line
      this.drawer.close();
      this.drawerOpened = false;
    }
  }
}
