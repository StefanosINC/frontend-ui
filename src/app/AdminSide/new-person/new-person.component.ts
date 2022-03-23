import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { EmployeeserviceService } from '../../../service/employeeservice.service';
import { Employee } from './../../Models/employee';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})
export class NewPersonComponent implements OnInit {


 

  // establish a form Group
  employeeForm !: FormGroup;

  // action btn
  actionBtn : string = "Save";

  // Pass in form builders, services, and any dialog ref
  constructor(private formBuilder: FormBuilder, private api : EmployeeserviceService, @Inject(MAT_DIALOG_DATA) public editData : any, private dialogRef : MatDialogRef<NewPersonComponent>) { }

  // Iniitiate a Form Group
  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      username : ['', Validators.required],
       password : ['', Validators.required],
       email : ['', Validators.required],
       phone : ['', Validators.required],
       firstname : ['', Validators.required],
       lastname : ['', Validators.required],
       role : ['', Validators.required]
       
     });

if(this.editData){
  this.actionBtn = "Update";
  this.employeeForm.controls['username'].setValue(this.editData.username);
  this.employeeForm.controls['password'].setValue(this.editData.password);
  this.employeeForm.controls['email'].setValue(this.editData.email);
  this.employeeForm.controls['phone'].setValue(this.editData.phone);
  this.employeeForm.controls['firstname'].setValue(this.editData.firstname);
  this.employeeForm.controls['lastname'].setValue(this.editData.lastname);
  this.employeeForm.controls['role'].setValue(this.editData.role);
  
}
  }
// create Employee method
CreateEmployee(){
  
  // if(!this.editData){
    
    if(this.employeeForm.valid){
  
      console.log("This is before the API" + this.employeeForm);
      this.api.addEmployee(this.employeeForm.value).subscribe({
        next:(res)=>{

          console.log(res);
          // alert("Employee Created Sucessful");
          // this.employeeForm.reset();
          // this.dialogRef.close('save');
          // console.log(res);
        },
        error:()=>{
          alert("Error while adding the products");

        }
      })
    }
  }

  
Update(){

  this.api.updateEmployee(this.employeeForm.value).subscribe({
    next:(res)=> {
      
      alert("Blog updated sucessfully");
      this.employeeForm.reset();
      this.dialogRef.close('update');
     
    },
    error:()=>{
      alert("Error while updating the blog!");
    }
  })
}
  
 
}

