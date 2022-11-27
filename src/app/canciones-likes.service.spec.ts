import { TestBed } from '@angular/core/testing';

import { CancionesLikesService } from './canciones-likes.service';

describe('CancionesLikesService', () => {
  let service: CancionesLikesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CancionesLikesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
