import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmobBannerComponent } from './admob-banner.component';

describe('AdmobBannerComponent', () => {
  let component: AdmobBannerComponent;
  let fixture: ComponentFixture<AdmobBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmobBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmobBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
