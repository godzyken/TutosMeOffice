import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldsComponent } from './golds.component';

describe('GoldsComponent', () => {
  let component: GoldsComponent;
  let fixture: ComponentFixture<GoldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
