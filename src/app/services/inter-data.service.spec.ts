import { TestBed } from '@angular/core/testing';

import { InterDataService } from './inter-data.service';

describe('InterDataService', () => {
  let service: InterDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
