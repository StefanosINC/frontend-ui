import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EmployeeserviceService } from 'src/service/employeeservice.service';
import { TimecardService } from 'src/service/timecard.service';
import { NewTimeComponent } from '../new-time/new-time.component';



@Component({
  selector: 'app-time-card-sheet',
  templateUrl: './time-card-sheet.component.html',
  styleUrls: ['./time-card-sheet.component.css']
})
// Time Card sheet componeent that implements all CRUD functionality!
export class TimeCardSheetComponent implements OnInit {

  // create a list of data that is set to recieve parametesr for the time card
  listOfData: Array<{ id: number; firstname: string, lastname: string, punch_in: string, punch_out: string, comments: string,  role: string}> = [];
 
// constructor
  constructor(private api: TimecardService, private dialog: MatDialog) { }
  // todays date time
  today: number = Date.now();
  
    
  ngOnInit(): void {

    // load the time card on initiation
    this.getTimeCard();
  }
 
  getTimeCard(){
    return this.api.getTimeCard().subscribe((data: any[])=>{
     
      this.listOfData = data;
      console.log( data);
    })
    }
   
  Delete(id: number){
   
    this.api.DeleteTimePunch(id).subscribe({
      next:(res)=>{
        console.log(res);
       console.log("test");
        this.getTimeCard();

      },
      error:()=>{
      
        alert("Employee Deleted Sucessflly");
        console.log(id);
        this.getTimeCard();
      }

    });



  }

  // Creaet a new Person ( this is the dialog open)
openDialog() {
  console.log("Time was opened");
  this.dialog.open(NewTimeComponent, {
    width: '30%'

   
  }).afterClosed().subscribe(val=>{
    if(val ==='save'){
      this.getTimeCard();
      console.log(val + " This is the in the Employee UI");
    }
  })
}
 
  
editProduct(data : any){
  console.log(data);
  console.log("Edit");
  this.dialog.open(NewTimeComponent,{
    width:'30%',
    data:data
 
    
  }).afterClosed().subscribe(val=>{
    if(val === 'update'){
     
   
      this.getTimeCard();
    }
  })
  
}

}



