import { Component,Output, EventEmitter, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottommenubar',
  templateUrl: './bottommenubar.component.html',
  styleUrl: './bottommenubar.component.css'
})
export class BottommenubarComponent {
  constructor(private router: Router,  private elementRef: ElementRef) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  @Output() closeDrawerEvent = new EventEmitter<void>();
  
  handleBottomMenuClick() {
    this.closeDrawerEvent.emit();
  }
  get nativeElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }
}
