import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUiComponent } from './employee-ui.component';

describe('EmployeeUiComponent', () => {
  let component: EmployeeUiComponent;
  let fixture: ComponentFixture<EmployeeUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
