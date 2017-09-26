import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentDetailViewComponent } from './appointment-detail-view.component';

describe('AppointmentDetailViewComponent', () => {
  let component: AppointmentDetailViewComponent;
  let fixture: ComponentFixture<AppointmentDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
