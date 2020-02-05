import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agenda } from './agenda';
import { config } from './config';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  public getAgenda():Observable<Agenda[]>{
    return this.http.get<Agenda[]>(config.api+"agenda");
  }

  public getInkomsten():Observable<any>{
    return this.http.get<any>(config.api+"inkomsten");
  }

  public getUitgaven():Observable<any>{
    return this.http.get<any>(config.api+"uitgaven");
  }

  public getWerkrekeningSaldo():Observable<any>{
    return this.http.get<any>(config.api+"werkrekeningsaldo");
  }

  public getReserverekeningSaldo():Observable<any>{
    return this.http.get<any>(config.api+"reserverekeningsaldo");
  }
}
