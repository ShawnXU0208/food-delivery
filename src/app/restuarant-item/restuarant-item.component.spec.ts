import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestuarantItemComponent } from './restuarant-item.component';

describe('RestuarantItemComponent', () => {
  let component: RestuarantItemComponent;
  let fixture: ComponentFixture<RestuarantItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestuarantItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestuarantItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
