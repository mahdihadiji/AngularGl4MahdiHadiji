import { TestBed } from '@angular/core/testing';

import { EmbaucheeService } from './embauchee.service';

describe('EmbaucheeService', () => {
  let service: EmbaucheeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmbaucheeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
