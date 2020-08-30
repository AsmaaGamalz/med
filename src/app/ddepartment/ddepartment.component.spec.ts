import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdepartmentComponent } from './ddepartment.component';

describe('DdepartmentComponent', () => {
  let component: DdepartmentComponent;
  let fixture: ComponentFixture<DdepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
