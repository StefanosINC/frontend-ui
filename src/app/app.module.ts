import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeserviceService } from '../service/employeeservice.service';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'
import {MatDatepickerModule, } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { TimeCardSheetComponent } from './AdminSide/time-card-sheet/time-card-sheet.component';
import { AdminUiComponent } from './AdminSide/admin-ui/admin-ui.component';
import { UserLoginComponent } from './Users/user-login/user-login.component';
import { NewPersonComponent } from './AdminSide/new-person/new-person.component';
import { EmployeeUiComponent } from './EmployeeSide/EmployeeUI/employee-ui/employee-ui.component';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import { EmployeeManagementUIComponent } from './AdminSide/employee-managementUI/employee-management-ui/employee-management-ui.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';
import { EditPersonComponent } from './AdminSide/edit-person/edit-person/edit-person.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TimeCardSheetComponent,
    AdminUiComponent,
    UserLoginComponent,
    NewPersonComponent,
    EmployeeUiComponent,
    EmployeeManagementUIComponent,
    EditPersonComponent
 
  ],
  imports: [
  BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NzBreadCrumbModule,
    NzGridModule,
    NzTableModule

  ],
  providers: [EmployeeserviceService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
