import { TestBed } from '@angular/core/testing';

import { HoroscopeServicesService } from './horoscope-services.service';

describe('HoroscopeServicesService', () => {
  let service: HoroscopeServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoroscopeServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
