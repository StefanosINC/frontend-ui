import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeserviceService } from '../../service/employeeservice.service';
@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})
export class NewPersonComponent implements OnInit {

  // establish a form Group
  employeeForm !: FormGroup;

  actionBtn : string = "Save";

  constructor(private formBuilder: FormBuilder, private api : EmployeeserviceService, @Inject(MAT_DIALOG_DATA) public editData : any, private dialogRef : MatDialogRef<NewPersonComponent>) { }

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
}
createEmployee(){
  
  if(!this.editData){
    console.log("3");
    if(this.employeeForm.valid){
      console.log("2");
      this.api.addEmployee(this.employeeForm.value).subscribe({
        next:(res)=>{
          alert("Employee Created Sucessful");
          this.employeeForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Error while adding the products");

        }
      })
    }
  }
  // this might be update product struggling to get this to work
}
}

