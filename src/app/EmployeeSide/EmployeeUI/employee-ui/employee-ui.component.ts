import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginComponent } from './../../../Users/user-login/user-login.component';
import { EmployeeserviceService } from 'src/service/employeeservice.service';

@Component({
  selector: 'app-employee-ui', 
  templateUrl: './employee-ui.component.html',
  styleUrls: ['./employee-ui.component.css'],
  providers: [UserLoginComponent]
 
})
export class EmployeeUiComponent implements OnInit {

  
  constructor(private route: Router, private authService: EmployeeserviceService) { }
 

  
    
    

  
  ngOnInit(): void {
    console.log("Username from the Login");
    

  }
  Back(){
    this.route.navigate(['user-login']);
    
  }

  ClockIn(){
   
    console.log("Employee From UserLogin");

   
    console.log(this.authService.getLogin());
  
    let clockInObject = this.authService.getLogin();
    
    console.log(clockInObject.employee_id);
    
  
}
}
// Stef