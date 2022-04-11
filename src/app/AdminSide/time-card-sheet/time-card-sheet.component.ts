import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EmployeeserviceService } from 'src/service/employeeservice.service';
import { TimecardService } from 'src/service/timecard.service';



@Component({
  selector: 'app-time-card-sheet',
  templateUrl: './time-card-sheet.component.html',
  styleUrls: ['./time-card-sheet.component.css']
})
export class TimeCardSheetComponent implements OnInit {

  listOfData: Array<{ id: number; firstname: string, lastname: string, punch_in: string, punch_out: string, comments: string,  role: string}> = [];


  constructor(private api: TimecardService, private dialog: MatDialog) { }

  ngOnInit(): void {

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
        
       console.log("test");
        this.getTimeCard();

      },
    
    });



  }
}



