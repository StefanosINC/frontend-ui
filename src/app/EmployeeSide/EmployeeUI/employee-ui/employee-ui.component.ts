import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginComponent } from './../../../Users/user-login/user-login.component';
import { EmployeeserviceService } from 'src/service/employeeservice.service';
import { MatDialog, throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { PunchComponent } from './../../EmployeeAction/punch/punch.component';
import { PunchoutComponent } from './../../EmployeeAction/punchout/punchout.component';

@Component({
  selector: 'app-employee-ui', 
  templateUrl: './employee-ui.component.html',
  styleUrls: ['./employee-ui.component.css'],
  providers: [UserLoginComponent]
 
})

export class EmployeeUiComponent implements OnInit {

  constructor(private route: Router, private authService: EmployeeserviceService, private dialog: MatDialog) { }
  today: number = Date.now();
  
    
  ngOnInit(): void {
    console.log("Username from the Login");
    
    console.log("Convert method");
    this.convert();
  }
  Back(){
    
    this.route.navigate(['user-login']);
    
  }

  ClockIn(){
    let clockInObject = this.authService.getLogin();

    console.log(clockInObject.employee_id);
    console.log("Component was opened");
   
    this.dialog.open(PunchComponent, {
      width: '30%'
  
     
    }).afterClosed().subscribe(val=>{
      if(val ==='save'){
        console.log(val + " This is the in the Employee UI");
      }
    })
}

ClockOut(){
  let clockInObject = this.authService.getLogin();

  console.log(clockInObject.employee_id);
  console.log("Component was opened");
 
  this.dialog.open(PunchoutComponent, {
    width: '30%'

   
  }).afterClosed().subscribe(val=>{
    if(val ==='save'){
      console.log(val + " This is the in the Employee UI");
    }
  })
}

convert(){
  this.today.toString();
  console.log(this.today.valueOf.toString());
  console.log(this.today);
  console.log(this.today.toString());
}
}
