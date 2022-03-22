import { Component, OnInit, ViewChild, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EmployeeserviceService } from 'src/service/employeeservice.service';
import { NewPersonComponent } from './../new-person/new-person.component';


@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {

  // Main class for the Employee Management Page 
  title = "Capstone Project Employee"
  displayedColumns: string[] = ['employee_id','username','password','email', 'phone', 'firstname', 'lastname', 'role'];
  dataSource!: MatTableDataSource<any>;

  // Action Btn
  actionBtn : string = "Save";
  [x: string]: any;
  isCollapsed = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private api: EmployeeserviceService, private dialog: MatDialog) {

    
   }

   // return employees
  ngOnInit(): void {
    this.getEmployees();

   
  }
  // Creaet a new Person ( this is the dialog open)
  openDialog() {
    console.log("Component was opened");
    this.dialog.open(NewPersonComponent, {
      width: '30%'
     
    }).afterClosed().subscribe(val=>{
      if(val ==='save'){
        this.getEmployees();
      }
    })
  }


  // Get employees
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
  
  // Apply Filter
  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
  }
}
editProduct(){

}

// Delete Employee
deleteEmployee(employee_id :number){

  
    this.api.deleteEmployee(employee_id).subscribe({
      next:(res)=>{
        alert("Product delete sucessfully");
        this.getEmployees();
    
    },
    error:()=>{
      
      alert("Error while deleting the product");
      console.log(employee_id);
    }
    })
  }
  }





