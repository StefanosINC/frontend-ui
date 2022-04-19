import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeserviceService } from 'src/service/employeeservice.service';
import { Employee } from './../../Models/employee';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})


  
// This is the login component that inherits a set of parameters of username password 
export class UserLoginComponent implements OnInit {
  // declare values
  username: string;
  password: string;

  errorMessage = 'Invalid Credentials';
  
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  newEmployee: Employee;

  // declare a constructor for rthe routes and services needed
  constructor(private route: Router, private authService: EmployeeserviceService) { }

 
  ngOnInit(): void {
  }

  // login!
  ToggleLogin(){
    // the employee object is equal to the auth srevice login object! username andpassword
   this.newEmployee = this.authService.LoginEmployee(this.username, this.password);

      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = "Login Sucess";
    
      // if employee is admin admin -> admin page
      if(this.newEmployee.username == "admin" && this.newEmployee.password == "admin"){

        this.route.navigate(['/admin-ui']);
      }
     
      // if employee is anything else -> employee -ui
      else{
        this.route.navigate(['employee-ui']);
      }
      
    }
 
  // Back buton
  Back(){
    this.route.navigate(['user-login']);
  
  }
 
}
