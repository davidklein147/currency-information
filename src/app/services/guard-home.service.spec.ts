import { TestBed } from '@angular/core/testing';

import { GuardHomeService } from './guard-home.service';

describe('GuardHomeService', () => {
  let service: GuardHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
