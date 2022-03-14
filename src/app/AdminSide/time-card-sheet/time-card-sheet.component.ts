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

  title = "Capstone TimeCard Management";
  displayedColumns: string[] = ['id', 'firstname', 'lastname','punch_in','punch_out', 'comments', 'role'];
  dataSource!: MatTableDataSource<any>;

  actionBtn : string = "Save";
  [x: string]: any;
  isCollapsed = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private api: TimecardService, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.getTimeCard1();
  }
 
  getTimeCard1(){
    this.api.getTimeCard().subscribe({next:(res)=>{this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    
    },
    error:(err)=>{
      alert("Error while grabbing TimeCard!");
    }
  })
  }
}



