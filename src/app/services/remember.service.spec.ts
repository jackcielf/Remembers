import { TestBed } from '@angular/core/testing';

import { RememberService } from './remember.service';

describe('RememberService', () => {
  let service: RememberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RememberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
