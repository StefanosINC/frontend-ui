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
  username: string;
  password: string;

  errorMessage = 'Invalid Credentials';
  
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  newEmployee: Employee;

  constructor(private route: Router, private authService: EmployeeserviceService) { }
// Navigation route to the Admin - ui
     // newEmployee: Employee;
 
  ngOnInit(): void {
  }

  ToggleLogin(){
    
   this.newEmployee = this.authService.LoginEmployee(this.username, this.password);

      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = " long gin sucessful";
    
      if(this.newEmployee.username == "admin" && this.newEmployee.password == "admin"){

        this.route.navigate(['/admin-ui']);
      }
     
      else{
        this.route.navigate(['employee-ui']);
      }
     

      console.log("User Login Componenent");
      
    
   
   
      

    //   for (let x = 0; x < EmployeeArray.length; x++) {
    //     console.log('Index/Loop No: ', [x]);
    //     // Do something here...
    // }
      
    }
 
  
  Back(){
    this.route.navigate(['user-login']);
  
  }
 
}
