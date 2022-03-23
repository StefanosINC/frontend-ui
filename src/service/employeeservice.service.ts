import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../app/Models/employee';
@Injectable({
  providedIn: 'root'
})


// This class Implements the Employee Service APIS from the Spring boot application 
export class EmployeeserviceService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

    
        // Get Employee API
        public getEmployees(): Observable<Employee[]>{
            return this.http.get<Employee[]>(`${this.apiServerUrl}/getEmployees`);
        }

        // Add Employee API
        public addEmployee(employee: Employee): Observable<Employee[]>{
            return this.http.post<Employee[]>(`${this.apiServerUrl}/createEmployee`, employee);
        }

        // Delete Employee API
        public deleteEmployee(employee_id: number): Observable<void>{
            return this.http.delete<void>(`${this.apiServerUrl}/deleteEmployee/${employee_id}`);
        }
        
        // Search Employee API

        public searchEmployee(employee_id: number): Observable<void>{
            return this.http.delete<void>(`${this.apiServerUrl}/service/Search/${employee_id}`);
        }
        // Update Employee API
        public updateEmployee(employee: Employee): Observable<Employee[]>{
            return this.http.put<Employee[]>(`${this.apiServerUrl}/updateEmployee`, employee);
        }
      
    }

