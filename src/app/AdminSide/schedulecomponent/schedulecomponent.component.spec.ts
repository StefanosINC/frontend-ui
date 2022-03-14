import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulecomponentComponent } from './schedulecomponent.component';

describe('SchedulecomponentComponent', () => {
  let component: SchedulecomponentComponent;
  let fixture: ComponentFixture<SchedulecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulecomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
