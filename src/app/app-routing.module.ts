import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { SchedulecomponentComponent } from './schedulecomponent/schedulecomponent.component';
import { TimeCardSheetComponent } from './TimeCard/time-card-sheet/time-card-sheet.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'employee-management', component: EmployeeManagementComponent},
  {path: 'schedulecomponent', component: SchedulecomponentComponent},
  {path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  {path: 'time-card-sheet', component: TimeCardSheetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [EmployeeManagementComponent, SchedulecomponentComponent];
