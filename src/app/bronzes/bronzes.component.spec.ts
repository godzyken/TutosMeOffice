import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BronzesComponent } from './bronzes.component';

describe('BronzesComponent', () => {
  let component: BronzesComponent;
  let fixture: ComponentFixture<BronzesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BronzesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BronzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
