import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTypeComponent } from './request-type.component';

describe('RequestTypeComponent', () => {
  let component: RequestTypeComponent;
  let fixture: ComponentFixture<RequestTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestTypeComponent]
    });
    fixture = TestBed.createComponent(RequestTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
