import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSummeryComponent } from './admin-summery.component';

describe('AdminSummeryComponent', () => {
  let component: AdminSummeryComponent;
  let fixture: ComponentFixture<AdminSummeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSummeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
