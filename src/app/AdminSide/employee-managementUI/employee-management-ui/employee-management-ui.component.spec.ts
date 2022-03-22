import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeManagementUIComponent } from './employee-management-ui.component';

describe('EmployeeManagementUIComponent', () => {
  let component: EmployeeManagementUIComponent;
  let fixture: ComponentFixture<EmployeeManagementUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeManagementUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeManagementUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
