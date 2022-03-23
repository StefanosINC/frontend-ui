import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { first } from 'rxjs';

import { EmployeeserviceService } from '../../../service/employeeservice.service';
import { Employee } from './../../Models/employee';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})
export class NewPersonComponent implements OnInit {

  username : string;
  password : string;
  email: string;
  phone: string;
  firstname: string;
  lastname : string;
  role: string;



  // action btn
  actionBtn : string = "Save";

  // Pass in form builders, services, and any dialog ref
  constructor(private api : EmployeeserviceService) { }

  // Iniitiate a Form Group
  ngOnInit(): void {
  

}

// create Employee method
CreateEmployee(){
  
  const employee = new Employee(-1, this.username, this.password, this.email, this.phone, this.firstname, this.lastname, this.role);

  console.log(employee);
  this.api.addEmployee(employee).subscribe({
    next:(res)=>{
      console.log(res);
    }
  })
}

        }

 
    


