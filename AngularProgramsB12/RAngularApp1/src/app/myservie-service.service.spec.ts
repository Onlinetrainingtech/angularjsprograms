import { TestBed } from '@angular/core/testing';

import { MyservieServiceService } from './myservie-service.service';

describe('MyservieServiceService', () => {
  let service: MyservieServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyservieServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
