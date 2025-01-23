import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllJobApplicationComponent } from './all-job-application.component';

describe('AllJobApplicationComponent', () => {
  let component: AllJobApplicationComponent;
  let fixture: ComponentFixture<AllJobApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllJobApplicationComponent]
    });
    fixture = TestBed.createComponent(AllJobApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
