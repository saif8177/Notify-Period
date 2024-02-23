import { TestBed } from '@angular/core/testing';

import { SplashStateService } from './splash-state.service';

describe('SplashStateService', () => {
  let service: SplashStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SplashStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
