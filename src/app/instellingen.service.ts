import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Instellingen } from './instellingen';

@Injectable({
  providedIn: 'root'
})
export class InstellingenService {

  constructor(private http: HttpClient) { }

  public createInstellingen(instellingen):Observable<any>{
    return this.http.post<any>("http://localhost:3000/api/instellingen", instellingen);
  }

  public editInstellingen(instellingen):Observable<any>{
    return this.http.put<any>("http://localhost:3000/api/instellingen", instellingen);
  }

  public getInstellingen():Observable<Instellingen>{
    return this.http.get<Instellingen>("http://localhost:3000/api/instellingen");
  }
}
