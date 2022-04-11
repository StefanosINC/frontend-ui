import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { EmployeeserviceService } from '../../../service/employeeservice.service';
import { Employee } from './../../Models/employee';
import { TimecardService } from 'src/service/timecard.service';
@Component({
  selector: 'app-new-time',
  templateUrl: './new-time.component.html',
  styleUrls: ['./new-time.component.css']
})
export class NewTimeComponent implements OnInit {
  // establish a form Group
  employeeForm !: FormGroup;

  // action btn
  actionBtn : string = "Save";

  constructor(private formBuilder: FormBuilder, private api : TimecardService, @Inject(MAT_DIALOG_DATA) public editData : any, private dialogRef : MatDialogRef<NewTimeComponent>) { }
  plzwork: object = new Date();
  ngOnInit(): void {

    this.employeeForm = this.formBuilder.group({
      firstname : ['', Validators.required],
      lastname : ['', Validators.required],
      punch_in : ['', Validators.required],
      punch_out: ['', Validators.required],
      comments : ['', Validators.required],
      role : ['', Validators.required]
      

       
     });
     if(this.editData){
      console.log("Here in updated");
      console.log("Punch Form");
      this.actionBtn="Update";
      this.employeeForm.controls['firstname'].setValue(this.editData.firstname);
      this.employeeForm.controls['lastname'].setValue(this.editData.lastname);
      this.employeeForm.controls['punch_in'].setValue(this.editData.punch_in);
      this.employeeForm.controls['punch_out'].setValue(this.editData.punch_out);
      this.employeeForm.controls['comments'].setValue(this.editData.comments);
      this.employeeForm.controls['role'].setValue(this.editData.role);
      
      
    
    
  }

  }
// create Employee method
CreateTime(){
  
  // if(!this.editData){
      if(!this.editData){
       
    if(this.employeeForm.valid){
  
      this.api.CreateTimePunch(this.employeeForm.value).subscribe({
        next:(res)=>{
        
         
           alert("TimeCreated Created Sucessful");
          this.employeeForm.reset();
           this.dialogRef.close('save');
       
        },
        error:()=>{
          alert("Error while adding the products");

        }
      })
    }
  }else{
   
    this.Update();
   
    console.log("whats good");

  }
}

 
Update(){

  this.api.UpdateTimePunch(this.employeeForm.value, this.editData.employee_id).subscribe({
    next:(res)=> {
      
      alert("Employee Updated!");
      this.employeeForm.reset();
      this.dialogRef.close('update');
     console.log("this is update below");
      console.log(res);

    },
    error:()=>{

      alert("Error while updating the blog!");
    
    }
  })
}
  
}

