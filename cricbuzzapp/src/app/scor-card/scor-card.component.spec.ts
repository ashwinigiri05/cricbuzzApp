import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorCardComponent } from './scor-card.component';

describe('ScorCardComponent', () => {
  let component: ScorCardComponent;
  let fixture: ComponentFixture<ScorCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScorCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
