import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlertsComponent } from './form-alerts.component';

describe('FormAlertsComponent', () => {
  let component: FormAlertsComponent;
  let fixture: ComponentFixture<FormAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
