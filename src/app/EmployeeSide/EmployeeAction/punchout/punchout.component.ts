import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeserviceService } from 'src/service/employeeservice.service';
import { TimecardService } from 'src/service/timecard.service';
@Component({
  selector: 'app-punchout',
  templateUrl: './punchout.component.html',
  styleUrls: ['./punchout.component.css']
})
// export the class Punch Out copmonent 
export class PunchoutComponent implements OnInit {

  // Clockin -> Form Group
 
  ClockInForm !: FormGroup;

  // Action btn
  actionBtn : string = "Punch Out";
 
// Constructor for the Punch Out component. It's important to reference all the forms needed as other classes, and employee service
  constructor(private formBuilder: FormBuilder, private api : EmployeeserviceService, @Inject(MAT_DIALOG_DATA) public punch : any, private dialogRef : MatDialogRef<PunchoutComponent>,private timeservice : TimecardService) { }
  today: number = Date.now();
  // plz work -> object for dates
   plzwork: object = new Date();
  

   // on initiation!
   // Let the clockInObject of the of the logged in user be the credentials needed.
   // This way we can have the user who is logged in be the user who can clock out
  ngOnInit(): void {
    let clockInObject = this.api.getLogin();
    console.log(clockInObject.employee_id);

    console.log(clockInObject.role);
 
   
    this.ClockInForm = this.formBuilder.group({
      firstname : ['', Validators.required],
      lastname : ['', Validators.required],
      punch_out : ['', Validators.required],
      comments : ['', Validators.required],
      role : ['', Validators.required]

    });

    if(!this.punch){
      console.log("Punch Form");
      this.actionBtn="Punch Out";
      this.ClockInForm.controls['firstname'].setValue(clockInObject.firstname);
      this.ClockInForm.controls['lastname'].setValue(clockInObject.lastname);
      this.ClockInForm.controls['punch_out'].setValue(this.plzwork);
      //this.ClockInForm.controls['comments'].setValue(this.punch.comments);
      this.ClockInForm.controls['role'].setValue(clockInObject.role);
      
    }
  }
  PunchOut(){
    if(!this.punch){
      if(this.ClockInForm.valid){

        this.timeservice.CreateTimePunch(this.ClockInForm.value).subscribe({
          next:(res)=>{
            console.log("Create Time punch");
            this.ClockInForm.reset();
            this.dialogRef.close();
            console.log(res);
          },
          error:()=>{
            alert("Error while updating the blog");
          }
        })
      }
    }
  }
  

}