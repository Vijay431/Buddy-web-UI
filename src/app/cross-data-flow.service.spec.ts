import { TestBed } from '@angular/core/testing';

import { CrossDataFlowService } from './cross-data-flow.service';

describe('CrossDataFlowService', () => {
  let service: CrossDataFlowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrossDataFlowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
