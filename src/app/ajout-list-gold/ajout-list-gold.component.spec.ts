import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutListGoldComponent } from './ajout-list-gold.component';

describe('AjoutListGoldComponent', () => {
  let component: AjoutListGoldComponent;
  let fixture: ComponentFixture<AjoutListGoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutListGoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutListGoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
