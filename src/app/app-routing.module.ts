import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminUiComponent } from './admin-ui/admin-ui.component';

import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { SchedulecomponentComponent } from './schedulecomponent/schedulecomponent.component';
import { TimeCardSheetComponent } from './TimeCard/time-card-sheet/time-card-sheet.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/user-login' },
  { path: 'employee-management', component: EmployeeManagementComponent},
  {path: 'schedulecomponent', component: SchedulecomponentComponent},
  {path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  {path: 'time-card-sheet', component: TimeCardSheetComponent},
  {path: 'admin-ui', component: AdminUiComponent},
  {path: 'user-login', component: UserLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [EmployeeManagementComponent, SchedulecomponentComponent];
