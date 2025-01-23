import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpComponent } from './ip.component';

describe('IpComponent', () => {
  let component: IpComponent;
  let fixture: ComponentFixture<IpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpComponent]
    });
    fixture = TestBed.createComponent(IpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
