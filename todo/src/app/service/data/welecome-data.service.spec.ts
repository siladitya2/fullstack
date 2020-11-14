import { TestBed } from '@angular/core/testing';

import { WelecomeDataService } from './welecome-data.service';

describe('WelecomeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WelecomeDataService = TestBed.get(WelecomeDataService);
    expect(service).toBeTruthy();
  });
});
