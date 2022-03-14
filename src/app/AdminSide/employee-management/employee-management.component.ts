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

  title = "Capstone Project Employee"
  displayedColumns: string[] = ['employee_id','username','password','email', 'phone', 'firstname', 'lastname', 'role'];
  dataSource!: MatTableDataSource<any>;

  
  actionBtn : string = "Save";
  [x: string]: any;
  isCollapsed = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private api: EmployeeserviceService, private dialog: MatDialog) {

    
   }

  ngOnInit(): void {
    this.getEmployees();

   
  }
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
editProduct(){

}
deleteEmployee(id:number){

  
    this.api.deleteEmployee(id).subscribe({
      next:(res)=>{
        alert("Product delete sucessfully");
        this.getEmployees();
    
    },
    error:()=>{
      
      alert("Error while deleting the product");
    
    }
    })
  }
  }





