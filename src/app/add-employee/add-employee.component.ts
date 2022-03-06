import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeserviceService } from '../../service/employeeservice.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  // establish a form Group
  employeeForm !: FormGroup;

  actionBtn : string = "Save";



  
  constructor(private formBuilder: FormBuilder, private api : EmployeeserviceService, @Inject(MAT_DIALOG_DATA) public editData : any, private dialogRef : MatDialogRef<AddEmployeeComponent>) { }

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

     
    //  if(this.editData){
    //   this.actionBtn = "Update";
    //    this.employeeForm.controls['username'].setValue(this.editData.username);
    //    this.employeeForm.controls['password'].setValue(this.editData.password);
    //    this.employeeForm.controls['email'].setValue(this.editData.email);
    //  this.employeeForm.controls['firstname'].setValue(this.editData.firstname);
    //   this.employeeForm.controls['lastname'].setValue(this.editData.lastname);
    //   this.employeeForm.controls['role'].setValue(this.editData.role);
    //  }

   
     }
     createEmployee(){
       console.log("Create was clicked");
       if(this.editData){
         if(this.employeeForm.valid){
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
  
    // Update Employee


  }
      

