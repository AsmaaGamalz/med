import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SseriveComponent } from './sserive.component';

describe('SseriveComponent', () => {
  let component: SseriveComponent;
  let fixture: ComponentFixture<SseriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SseriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SseriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
