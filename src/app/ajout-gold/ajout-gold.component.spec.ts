import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutGoldComponent } from './ajout-gold.component';

describe('AjoutGoldComponent', () => {
  let component: AjoutGoldComponent;
  let fixture: ComponentFixture<AjoutGoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutGoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutGoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
