import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { TimeCardSheetComponent } from './AdminSide/time-card-sheet/time-card-sheet.component';
import { AdminUiComponent } from './AdminSide/admin-ui/admin-ui.component';
import { UserLoginComponent } from './Users/user-login/user-login.component';
import { EmployeeManagementComponent } from './AdminSide/employee-management/employee-management.component';
import { SchedulecomponentComponent } from './AdminSide/schedulecomponent/schedulecomponent.component';
import { NewPersonComponent } from './AdminSide/new-person/new-person.component';
import { EmployeeUiComponent } from './EmployeeSide/EmployeeUI/employee-ui/employee-ui.component';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import { EmployeeManagementUIComponent } from './AdminSide/employee-managementUI/employee-management-ui/employee-management-ui.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/user-login' },
  { path: 'employee-management', component: EmployeeManagementComponent},
  {path: 'schedulecomponent', component: SchedulecomponentComponent},
  {path: 'time-card-sheet', component: TimeCardSheetComponent},
  {path: 'admin-ui', component: AdminUiComponent},
  {path: 'user-login', component: UserLoginComponent},
  {path: 'new-person', component: NewPersonComponent},
  {path: 'employee-ui', component: EmployeeUiComponent},
  {path: 'employee-managementUI', component: EmployeeManagementUIComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 


exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [EmployeeManagementComponent, SchedulecomponentComponent];
