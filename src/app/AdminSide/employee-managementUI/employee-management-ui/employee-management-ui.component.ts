import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from 'src/app/Models/employee';
import { EmployeeserviceService } from 'src/service/employeeservice.service';
import { EditPersonComponent } from '../../edit-person/edit-person/edit-person.component';
import { NewPersonComponent } from '../../new-person/new-person.component';

@Component({
  selector: 'app-employee-management-ui',
  templateUrl: './employee-management-ui.component.html',
  styleUrls: ['./employee-management-ui.component.css']
})
export class EmployeeManagementUIComponent implements OnInit {
  listOfData: Array<{ employee_id: number; username: string; password: string, email: string, 
                      phone: string, firstname: string, lastname: string, role: string}> = [];
  

  constructor(private api: EmployeeserviceService, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.ReturnEmployees();

  
  }


  ReturnEmployees(){
    return this.api.getEmployees().subscribe((data: any[])=>{
      console.log(data);
      this.listOfData = data;
      console.log(data);
    })

  }
// Creaet a new Person ( this is the dialog open)
openDialog() {
  console.log("Component was opened");
  this.dialog.open(NewPersonComponent, {
    width: '30%'

   
  }).afterClosed().subscribe(val=>{
    if(val ==='save'){
      this.ReturnEmployees();
      console.log(val + " This is the in the Employee UI");
    }
  })
}
 
  Delete(id: number){
    this.api.deleteEmployee(id).subscribe({
      next:(res)=>{
        console.log(res);
       
        this.ReturnEmployees();

      },
      error:()=>{
    
      }
    })

    console.log("here");
  }
  
  editProduct(data : any){
    console.log(data);
    console.log("Edit Component");
    this.dialog.open(NewPersonComponent,{
      width:'30%',
      data:data
   
      
    }).afterClosed().subscribe(val=>{
      if(val === 'update'){
       
     
        this.ReturnEmployees();
      }
    })
    
  }
  
 
  

}

