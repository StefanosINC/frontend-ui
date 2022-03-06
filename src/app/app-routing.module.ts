import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { SchedulecomponentComponent } from './schedulecomponent/schedulecomponent.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'employee-management', component: EmployeeManagementComponent},
  {path: 'schedulecomponent', component: SchedulecomponentComponent},
  {path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [EmployeeManagementComponent, SchedulecomponentComponent];
