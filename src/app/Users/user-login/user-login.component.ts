import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  // Navigation route to the Admin - ui
  
  Nextpage(){
    this.route.navigate(['/admin-ui']);

  }
}
