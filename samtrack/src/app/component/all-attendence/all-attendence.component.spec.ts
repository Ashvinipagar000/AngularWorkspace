import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAttendenceComponent } from './all-attendence.component';

describe('AllAttendenceComponent', () => {
  let component: AllAttendenceComponent;
  let fixture: ComponentFixture<AllAttendenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllAttendenceComponent]
    });
    fixture = TestBed.createComponent(AllAttendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
