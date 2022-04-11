import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeserviceService } from 'src/service/employeeservice.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {


    // establish a form Group
    employeeForm !: FormGroup;

    // action btn
    actionBtn : string = "edit";
  
  constructor(private formBuilder: FormBuilder, private api : EmployeeserviceService, @Inject(MAT_DIALOG_DATA) public editData : any, private dialogRef : MatDialogRef<EditPersonComponent>) { }

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
      console.log("Here in updated This is being used");
      this.actionBtn ="Test";
      this.employeeForm.controls['username'].setValue(this.editData.username);
      this.employeeForm.controls['password'].setValue(this.editData.password);
      this.employeeForm.controls['email'].setValue(this.editData.email);
      this.employeeForm.controls['phone'].setValue(this.editData.phone);
      this.employeeForm.controls['firstname'].setValue(this.editData.firstname);
      this.employeeForm.controls['lastname'].setValue(this.editData.lastname);
      this.employeeForm.controls['role'].setValue(this.editData.role);
      
    }
  }
     
//   NewUpdateEmployee(){
  
//   this.api.updateEmployee(this.editData).subscribe({
//     next:(res)=> {
      
//       alert("Blog updated sucessfully");
//       this.employeeForm.reset();
//       this.dialogRef.close('update');
     
//     },
//     error:()=>{
//       alert("Error while updating the blog!");
//     }
//   })
// }
  }


