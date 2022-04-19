import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeserviceService } from 'src/service/employeeservice.service';
import { TimecardService } from 'src/service/timecard.service';
@Component({
  selector: 'app-punch',
  templateUrl: './punch.component.html',
  styleUrls: ['./punch.component.css']
})
// export the class Punch in copmonent 
export class PunchComponent implements OnInit {

  // Clockin -> Form Group
 

  ClockInForm !: FormGroup;
  // Action btn
  actionBtn : string = "Punch In";
 
// Constructor for the Punch Out component. It's important to reference all the forms needed as other classes, and employee service
  constructor(private formBuilder: FormBuilder, private api : EmployeeserviceService, @Inject(MAT_DIALOG_DATA) public punch : any, private dialogRef : MatDialogRef<PunchComponent>,private timeservice : TimecardService) { }
  today: number = Date.now();
  // plz work -> object for dates
   plzwork: object = new Date();
  
 // on initiation!
   // Let the clockInObject of the of the logged in user be the credentials needed.
   // This way we can have the user who is logged in be the user who can clock in
  ngOnInit(): void {
    let clockInObject = this.api.getLogin();
    console.log(clockInObject.employee_id);

    console.log(clockInObject.role);
    console.log("plz work below");
    console.log(this.plzwork);
   // Forms
    this.ClockInForm = this.formBuilder.group({
      firstname : ['', Validators.required],
      lastname : ['', Validators.required],
      punch_in : ['', Validators.required],
      comments : ['', Validators.required],
      role : ['', Validators.required]

    });
   // Forms for punch in
    if(!this.punch){
      console.log("Punch Form");
      this.actionBtn="Clock In";
      this.ClockInForm.controls['firstname'].setValue(clockInObject.firstname);
      this.ClockInForm.controls['lastname'].setValue(clockInObject.lastname);
      this.ClockInForm.controls['punch_in'].setValue(this.plzwork);
      //this.ClockInForm.controls['comments'].setValue(this.punch.comments);
      this.ClockInForm.controls['role'].setValue(clockInObject.role);
      
    }
  }

  // Punch in method that will reference the timecard create api
  PunchIn(){
    if(!this.punch){
      if(this.ClockInForm.valid){

        this.timeservice.CreateTimePunch(this.ClockInForm.value).subscribe({
          next:(res)=>{
            // response
            console.log("Create Time punch");
            console.log(res);
            this.dialogRef.close();
          },
          // error
          error:()=>{
            alert("Error while updating the blog");
          }
        })
      }
    }
  }
  

}
