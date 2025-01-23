import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidingParaComponent } from './guiding-para.component';

describe('GuidingParaComponent', () => {
  let component: GuidingParaComponent;
  let fixture: ComponentFixture<GuidingParaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuidingParaComponent]
    });
    fixture = TestBed.createComponent(GuidingParaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
