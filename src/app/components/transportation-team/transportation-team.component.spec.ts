import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationTeamComponent } from './transportation-team.component';

describe('TransportationTeamComponent', () => {
  let component: TransportationTeamComponent;
  let fixture: ComponentFixture<TransportationTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransportationTeamComponent]
    });
    fixture = TestBed.createComponent(TransportationTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
