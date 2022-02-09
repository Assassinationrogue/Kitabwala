import { TestBed } from '@angular/core/testing';

import { NewUserGuard } from './NewUser.guard';

describe('RoleGuardGuard', () => {
  let guard: NewUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NewUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
