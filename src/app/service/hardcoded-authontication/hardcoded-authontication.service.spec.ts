import { TestBed } from '@angular/core/testing';

import { HardcodedAuthonticationService } from './hardcoded-authontication.service';

describe('HardcodedAuthonticationService', () => {
  let service: HardcodedAuthonticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodedAuthonticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
