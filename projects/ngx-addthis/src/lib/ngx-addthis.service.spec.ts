import { TestBed } from '@angular/core/testing';

import { NgxAddthisService } from './ngx-addthis.service';

describe('NgxAddthisService', () => {
  let service: NgxAddthisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAddthisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
