import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestComponent } from './highest.component';

describe('HighestComponent', () => {
  let component: HighestComponent;
  let fixture: ComponentFixture<HighestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
