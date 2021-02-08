import { TestBed } from '@angular/core/testing';

import { ListCurService } from './list-cur.service';

describe('ListCurService', () => {
  let service: ListCurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
