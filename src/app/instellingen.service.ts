import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Instellingen } from './instellingen';
import { config } from './config'

@Injectable({
  providedIn: 'root'
})
export class InstellingenService {

  constructor(private http: HttpClient) { }

  public createInstellingen(instellingen):Observable<any>{
    return this.http.post<any>(config.api + "instellingen", instellingen);
  }

  public editInstellingen(instellingen):Observable<any>{
    return this.http.put<any>(config.api + "instellingen", instellingen);
  }

  public getInstellingen():Observable<Instellingen>{
    return this.http.get<Instellingen>(config.api + "instellingen");
  }

  public getSetup(){
    console.log('getSetup')
    return this.http.get<any>(config.api + "setup")
  }
}
