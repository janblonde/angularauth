import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { HttpParams } from '@angular/common/http';
import { Agenda } from './agenda';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  public getAgenda():Observable<Agenda[]>{
    return this.http.get<Agenda[]>("http://localhost:3000/api/agenda");
  }

  public getInkomsten():Observable<any>{
    return this.http.get<any>("http://localhost:3000/api/inkomsten");
  }

  public getUitgaven():Observable<any>{
    return this.http.get<any>("http://localhost:3000/api/uitgaven");
  }

  public getWerkrekeningSaldo():Observable<any>{
    return this.http.get<any>("http://localhost:3000/api/werkrekeningsaldo");
  }

  public getReserverekeningSaldo():Observable<any>{
    return this.http.get<any>("http://localhost:3000/api/reserverekeningsaldo");
  }
}
