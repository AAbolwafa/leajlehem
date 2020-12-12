import { TestBed } from '@angular/core/testing';

import { SchoolCollectionService } from './school-collection.service';

describe('SchoolCollectionService', () => {
  let service: SchoolCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
