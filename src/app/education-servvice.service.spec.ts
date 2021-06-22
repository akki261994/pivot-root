import { TestBed } from '@angular/core/testing';

import { EducationServviceService } from './education-servvice.service';

describe('EducationServviceService', () => {
  let service: EducationServviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationServviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
