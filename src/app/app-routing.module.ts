import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { TimeCardSheetComponent } from './AdminSide/time-card-sheet/time-card-sheet.component';
import { AdminUiComponent } from './AdminSide/admin-ui/admin-ui.component';
import { UserLoginComponent } from './Users/user-login/user-login.component';
import { EmployeeManagementComponent } from './AdminSide/employee-management/employee-management.component';
import { SchedulecomponentComponent } from './AdminSide/schedulecomponent/schedulecomponent.component';
import { NewPersonComponent } from './AdminSide/new-person/new-person.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/user-login' },
  { path: 'employee-management', component: EmployeeManagementComponent},
  {path: 'schedulecomponent', component: SchedulecomponentComponent},
  {path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  {path: 'time-card-sheet', component: TimeCardSheetComponent},
  {path: 'admin-ui', component: AdminUiComponent},
  {path: 'user-login', component: UserLoginComponent},
  {path: 'new-person', component: NewPersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 

exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [EmployeeManagementComponent, SchedulecomponentComponent];
