import { TestBed } from '@angular/core/testing';

import { CheckSessionGuardGuard } from './check-session-guard.guard';

describe('CheckSessionGuardGuard', () => {
  let guard: CheckSessionGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckSessionGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
