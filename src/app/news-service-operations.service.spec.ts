import { TestBed } from '@angular/core/testing';

import { NewsServiceOperationsService } from './news-service-operations.service';

describe('NewsServiceOperationsService', () => {
  let service: NewsServiceOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsServiceOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
