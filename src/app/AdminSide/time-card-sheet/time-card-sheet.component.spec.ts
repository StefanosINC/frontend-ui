import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCardSheetComponent } from './time-card-sheet.component';

describe('TimeCardSheetComponent', () => {
  let component: TimeCardSheetComponent;
  let fixture: ComponentFixture<TimeCardSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeCardSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeCardSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
