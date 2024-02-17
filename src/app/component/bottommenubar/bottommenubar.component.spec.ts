import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottommenubarComponent } from './bottommenubar.component';


describe('BottommenubarComponent', () => {
  
  
  let component: BottommenubarComponent;
  let fixture: ComponentFixture<BottommenubarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BottommenubarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottommenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
