import { TestBed } from '@angular/core/testing';

import { AlbumFilterService } from './album-filter.service';

describe('AlbumFilterService', () => {
  let service: AlbumFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
