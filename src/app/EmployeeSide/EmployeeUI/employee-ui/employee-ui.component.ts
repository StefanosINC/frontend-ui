import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginComponent } from './../../../Users/user-login/user-login.component';
import { EmployeeserviceService } from 'src/service/employeeservice.service';
import { MatDialog, throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { PunchComponent } from './../../EmployeeAction/punch/punch.component';
import { PunchoutComponent } from './../../EmployeeAction/punchout/punchout.component';

// UserLogin Component UI 
@Component({
  selector: 'app-employee-ui', 
  templateUrl: './employee-ui.component.html',
  styleUrls: ['./employee-ui.component.css'],
  providers: [UserLoginComponent]
 
})

// Employee UI component class exported 
export class EmployeeUiComponent implements OnInit {
// Route the router, bring in the EmployeeService and dialog
  constructor(private route: Router, private authService: EmployeeserviceService, private dialog: MatDialog) { }
  // DateTime
  today: number = Date.now();
    
  // On initation 
  ngOnInit(): void {
  
    this.convert();
  }
  // back button
  Back(){
    
    this.route.navigate(['user-login']);
    
  }

  //clock into work 
  // *** Reference the auth service as an object!!!
  ClockIn(){
    let clockInObject = this.authService.getLogin();

    console.log(clockInObject.employee_id);
    console.log("Component was opened");
   
    // punch componenet!
    this.dialog.open(PunchComponent, {
      width: '30%'
  
      // after close
     
    }).afterClosed().subscribe(val=>{
      if(val ==='save'){
        console.log(val + " This is the in the Employee UI");
      }
    })
}

// clock out 
ClockOut(){
  let clockInObject = this.authService.getLogin();

  // return statements
  console.log(clockInObject.employee_id);
  console.log("Component was opened");
 
  // punch out components
  this.dialog.open(PunchoutComponent, {
    width: '30%'

    // close
   
  }).afterClosed().subscribe(val=>{
    if(val ==='save'){
      console.log(val + " This is the in the Employee UI");
    }
  })
}

// convert date time
convert(){
  this.today.toString();

}
}
