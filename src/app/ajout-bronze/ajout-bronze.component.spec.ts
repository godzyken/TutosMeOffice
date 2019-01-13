import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutBronzeComponent } from './ajout-bronze.component';

describe('AjoutBronzeComponent', () => {
  let component: AjoutBronzeComponent;
  let fixture: ComponentFixture<AjoutBronzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutBronzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutBronzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
