import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-ui',
  templateUrl: './admin-ui.component.html',
  styleUrls: ['./admin-ui.component.css']
})
// Admin UI class that implements the values.
// Set A boolean value to false and set them to true so you can manipulate the Toggle

export class AdminUiComponent implements OnInit {
  [x: string]: any;
  isCollapsed = false;
  isEmployee = false;
  isSchedule = false;
  isTimecard = false;
  

  constructor() { }

  ngOnInit(): void {

  }


  // if multiple are true
  // 
  ToggleEmployee(){
    // taking current value and flipping it 
    this.isEmployee = !this.isEmployee;
    this.isSchedule = false;
    this.isTimecard = false;
  }
  ToggleSchedule(){
    // taking current value and flipping it 
    this.isSchedule = !this.isSchedule;
    this.isTimecard = false;
    this.isEmployee = false;
  }
  
  ToggleTimeCard(){
    // taking current value and flipping it 
    this.isTimecard = !this.isTimecard;
    this.isEmployee = false;
    this.isSchedule = false;
  }

  
}
