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
export class TimecardService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


public getTimeCard(): Observable<TimeCard[]>{
    return this.http.get<TimeCard[]>(`${this.apiServerUrl}/getCard`);
}
public CreateTimePunch(timecard: TimeCard): Observable<TimeCard[]>{
  return this.http.get<TimeCard[]>(`${this.apiServerUrl}/service1/Punch/${timecard}`);
}
public DeleteTimePunch(id: TimeCard): Observable<TimeCard[]>{
  return this.http.get<TimeCard[]>(`${this.apiServerUrl}/service1/DeleteTimeCardID/${id}`);
}
public UpdateTimePunch(): Observable<TimeCard[]>{
  return this.http.get<TimeCard[]>(`${this.apiServerUrl}/getCard`);
}
}
