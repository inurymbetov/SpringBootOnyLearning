import { TestBed } from '@angular/core/testing';

import { StartPageServiceService } from './start-page-service.service';

describe('StartPageServiceService', () => {
  let service: StartPageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartPageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
