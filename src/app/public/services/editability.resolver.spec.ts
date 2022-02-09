import { TestBed } from '@angular/core/testing';

import { EditabilityResolver } from './editability.resolver';

describe('EditabilityResolveResolver', () => {
  let resolver: EditabilityResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EditabilityResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
