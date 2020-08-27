import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { config } from './config'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = config.api+"register";
  private _loginUrl = config.api+"login";

  constructor(private http: HttpClient) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user){
    return this.http.post<any>(this._loginUrl, user)
  }

  getRole(user){
    return this.http.post<any>(config.api+"role", user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
