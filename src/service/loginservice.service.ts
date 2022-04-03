import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  public username: string;
  public password: string;

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


  login(username: string, password: string) {
    return this.http.get(environment.apiBaseUrl + `/api/v1/login`,
      { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
        this.username = username;
        this.password = password;
        this.registerSuccessfulLogin(username, password);
      }));
  }

  createBasicAuthToken(username: string, password: string) {
    return 'Basic ' + window.btoa(username + ":" + password);
  }

  registerSuccessfulLogin(username: any, password: any) {
    // save the username to session
  }
}
