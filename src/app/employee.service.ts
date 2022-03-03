import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'
})

export class EmployeeService{
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

        public getEmployees(): Observable<Employee[]>{
            return this.http.get<Employee[]>(`${this.apiServerUrl}/getEmployees`);
        }

        public addEmployee(employee: Employee): Observable<Employee[]>{
            return this.http.post<Employee[]>(`${this.apiServerUrl}/service/createEmployee`, employee);
        }

        public deleteEmployee(employee_id: number): Observable<void>{
            return this.http.delete<void>(`${this.apiServerUrl}/service/deleteEmployee/${employee_id}`);
        }
    }
