import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularShowComponent } from './popular-show.component';

describe('PopularShowComponent', () => {
  let component: PopularShowComponent;
  let fixture: ComponentFixture<PopularShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
