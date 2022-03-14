import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../app/Models/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

    
        public getEmployees(): Observable<Employee[]>{
            return this.http.get<Employee[]>(`${this.apiServerUrl}/getEmployees`);
        }

        public addEmployee(employee: Employee): Observable<Employee[]>{
            return this.http.post<Employee[]>(`${this.apiServerUrl}/createEmployee`, employee);
        }

        public deleteEmployee(employee_id: number): Observable<void>{
            return this.http.delete<void>(`${this.apiServerUrl}/service/deleteEmployee/${employee_id}`);
        }
        
        public searchEmployee(employee_id: number): Observable<void>{
            return this.http.delete<void>(`${this.apiServerUrl}/service/Search/${employee_id}`);
        }

  }

