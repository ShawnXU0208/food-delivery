import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutSideComponent } from './checkout-side.component';

describe('CheckoutSideComponent', () => {
  let component: CheckoutSideComponent;
  let fixture: ComponentFixture<CheckoutSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
