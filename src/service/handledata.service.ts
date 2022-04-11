import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/Models/employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HandledataService {

  private apiServerUrl = environment.apiBaseUrl;
  newEmployee: Employee;
  EmployeeArray: Employee[] = [];
  constructor(private http: HttpClient) { }


  public LoginEmployee(username: String, password: String): Observable<Employee>{
    return this.http.post<Employee>(`${this.apiServerUrl}/login`, {
     username, password
    });
}

  public handleData(){



    this.EmployeeArray.push(this.newEmployee);

    console.log(this.EmployeeArray.length);
    // storing the login object
    // functino to make the request and put in the storage
    // function that pulls from the storage and returns the value
    

  }


}
