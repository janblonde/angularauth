import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { config } from './config'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public checkToken(token):any{
    let httpParams = new HttpParams().set('reset', token);
    return this.http.get<any>(config.api + "userbytoken",{params:httpParams})
  }

  public sendToken(email):Observable<any>{
    let httpParams = new HttpParams().set('email', email);
    return this.http.get<any>(config.api + "resettoken",{params:httpParams})
  }

  public resetPassword(passPort):Observable<any>{
    return this.http.put<any>(config.api + "resetpassword", passPort)
  }
}
