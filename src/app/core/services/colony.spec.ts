import { TestBed } from '@angular/core/testing';

import { Colony } from './colony';

describe('Colony', () => {
  let service: Colony;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Colony);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
