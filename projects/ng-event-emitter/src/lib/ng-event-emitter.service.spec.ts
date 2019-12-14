import { TestBed } from '@angular/core/testing';

import { NgEventEmitterService } from './ng-event-emitter.service';

describe('NgEventEmitterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgEventEmitterService = TestBed.get(NgEventEmitterService);
    expect(service).toBeTruthy();
  });
});
