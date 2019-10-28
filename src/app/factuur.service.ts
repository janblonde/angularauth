import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Factuur } from './factuur';

@Injectable({
  providedIn: 'root'
})
export class FactuurService {

  constructor(private http: HttpClient) { }

  public getFacturen():Observable<Factuur[]>{
    return this.http.get<Factuur[]>("http://localhost:3000/api/facturen");
  }

  public getVoorschotten():Observable<Factuur[]>{
    return this.http.get<Factuur[]>("http://localhost:3000/api/voorschotten");
  }

  public createFactuur(factuur):Observable<any>{
    return this.http.post<any>("http://localhost:3000/api/facturen", factuur);
  }
}
