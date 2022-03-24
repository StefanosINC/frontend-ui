import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TimeCard } from './../app/Models/user';
import { Employee } from './../app/Models/employee';

@Injectable({
  providedIn: 'root'
})
// This class implements a connection to the Spring Boot Application to connect the API's 
export class TimecardService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


  // Get Time Card API
public getTimeCard(): Observable<TimeCard[]>{
    return this.http.get<TimeCard[]>(`${this.apiServerUrl}/getCard`);
}
// Create Time Card API
public CreateTimePunch(timecard: TimeCard): Observable<TimeCard[]>{
  return this.http.get<TimeCard[]>(`${this.apiServerUrl}/service1/Punch/${timecard}`);
}
// Delete Time Card API
public DeleteTimePunch(employee_id: number): Observable<void[]>{
  return this.http.get<void[]>(`${this.apiServerUrl}/DeleteTimeCardID/${employee_id}`);
}

// Update Time Punch API
public UpdateTimePunch(): Observable<TimeCard[]>{
  return this.http.get<TimeCard[]>(`${this.apiServerUrl}/getCard`);
}
}
