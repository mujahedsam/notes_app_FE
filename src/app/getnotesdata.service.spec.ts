import { TestBed, inject } from '@angular/core/testing';

import { GetnotesdataService } from './getnotesdata.service';

describe('GetnotesdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetnotesdataService]
    });
  });

  it('should be created', inject([GetnotesdataService], (service: GetnotesdataService) => {
    expect(service).toBeTruthy();
  }));
});
