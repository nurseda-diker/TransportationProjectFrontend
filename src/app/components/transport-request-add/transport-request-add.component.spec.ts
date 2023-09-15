import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportRequestAddComponent } from './transport-request-add.component';

describe('TransportRequestAddComponent', () => {
  let component: TransportRequestAddComponent;
  let fixture: ComponentFixture<TransportRequestAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransportRequestAddComponent]
    });
    fixture = TestBed.createComponent(TransportRequestAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
