import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOfCategoryComponent } from './menu-of-category.component';

describe('MenuOfCategoryComponent', () => {
  let component: MenuOfCategoryComponent;
  let fixture: ComponentFixture<MenuOfCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuOfCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOfCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
