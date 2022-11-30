import { TestBed } from '@angular/core/testing';

import { CancionDataService } from './cancion-data.service';

describe('CancionDataService', () => {
  let service: CancionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CancionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
