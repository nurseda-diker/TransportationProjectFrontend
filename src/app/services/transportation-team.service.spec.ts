import { TestBed } from '@angular/core/testing';

import { TransportationTeamService } from './transportation-team.service';

describe('TransportationTeamService', () => {
  let service: TransportationTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransportationTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
