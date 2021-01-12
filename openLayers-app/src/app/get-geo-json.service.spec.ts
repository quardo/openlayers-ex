import { TestBed } from '@angular/core/testing';

import { GetGeoJsonService } from './get-geo-json.service';

describe('GetGeoJsonService', () => {
  let service: GetGeoJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetGeoJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
