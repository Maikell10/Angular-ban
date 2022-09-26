import { TestBed } from '@angular/core/testing';

import { GetInGuardGuard } from './get-in-guard.guard';

describe('GetInGuardGuard', () => {
  let guard: GetInGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GetInGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
