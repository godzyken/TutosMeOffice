import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutListBronzeComponent } from './ajout-list-bronze.component';

describe('AjoutListBronzeComponent', () => {
  let component: AjoutListBronzeComponent;
  let fixture: ComponentFixture<AjoutListBronzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutListBronzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutListBronzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
