import { Component, OnInit } from '@angular/core';
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


  constructor(private route: Router, private authService: EmployeeserviceService) { }

  ngOnInit(): void {
  }

  // Navigation route to the Admin - ui
  
  ToggleLogin(){
    
   return this.authService.LoginEmployee(this.username, this.password).subscribe({
    next:(res)=>{

      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = " login sucessful";
      if(this.username == "admin" && this.password == "admin"){
        this.route.navigate(['/admin-ui']);
      }
      else{
        this.route.navigate(['employee-ui']);
      }
   
      console.log(res);

  
      // redirect to main page
    },
    
     error:() => {
      this.invalidLogin = true;
      this.loginSuccess == false;
    }

    });
  }
 
}
