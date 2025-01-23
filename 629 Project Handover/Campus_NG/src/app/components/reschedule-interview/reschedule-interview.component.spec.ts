import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescheduleInterviewComponent } from './reschedule-interview.component';

describe('RescheduleInterviewComponent', () => {
  let component: RescheduleInterviewComponent;
  let fixture: ComponentFixture<RescheduleInterviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RescheduleInterviewComponent]
    });
    fixture = TestBed.createComponent(RescheduleInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
