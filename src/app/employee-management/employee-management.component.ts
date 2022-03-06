import { Component, OnInit, ViewChild, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EmployeeserviceService } from 'src/service/employeeservice.service';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {

  title = "Capstone Project Employee"
  displayedColumns: string[] = ['employee_id','username','password','email', 'phone', 'firstname', 'lastname', 'role'];
  dataSource!: MatTableDataSource<any>;

  // establish a form Group
  employeeForm !: FormGroup;

  actionBtn : string = "Save";

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private formBuilder: FormBuilder, private api: EmployeeserviceService) {

    
   }

  ngOnInit(): void {
    this.getEmployees();
    this.employeeForm = this.formBuilder.group({
      
      // username : ['', Validators.required],
      // password : ['', Validators.required],
      // email : ['', Validators.required],
      //  phone : ['', Validators.required],
      // firstname : ['', Validators.required],
      // lastname : ['', Validators.required],
      // role : ['', Validators.required],
    });

    // if(this.editData){
    //   this.actionBtn = "Update";
    //   this.employeeForm.controls['username'].setValue(this.editData.);
    //   this.employeeForm.controls['password'].setValue(this.editData.category);
    //   this.employeeForm.controls['email'].setValue(this.editData.freshness);
    //   this.employeeForm.controls['phone'].setValue(this.editData.price);
    //   this.employeeForm.controls['firstname'].setValue(this.editData.comment);
    //   this.employeeForm.controls['role'].setValue(this.editData.date);
    // }





    // Retrieve Employees
   
   
  }

  getEmployees(){
    this.api.getEmployees().subscribe({next:(res)=>{this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    
    },
    error:(err)=>{
      alert("Error while grabbing employees!");
    }
  })
  }
  
  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
  }
}
}
