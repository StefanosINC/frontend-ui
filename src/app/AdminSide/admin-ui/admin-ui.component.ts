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
  isSettings = false;

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
    this.isSettings = false;
  }
  ToggleSchedule(){
    // taking current value and flipping it 
    this.isSchedule = !this.isSchedule;
    this.isTimecard = false;
    this.isEmployee = false;
    this.isSettings = false;
  }
  
  ToggleTimeCard(){
    // taking current value and flipping it 
    this.isTimecard = !this.isTimecard;
    this.isEmployee = false;
    this.isSchedule = false;
    this.isSettings = false;
  }

  ToggleSettings(){
    this.isSettings = !this.isSettings;
    this.isEmployee = false;
    this.isSchedule = false;
    this.isTimecard = false;
  }
  
}
