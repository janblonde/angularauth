import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Factuur } from './factuur';
import { config } from './config';

@Injectable({
  providedIn: 'root'
})
export class FactuurService {

  constructor(private http: HttpClient) { }

  public getFacturen(open):Observable<Factuur[]>{
    if(!open)
      return this.http.get<Factuur[]>(config.api+"facturen");
    else
      return this.http.get<Factuur[]>(config.api+"openfacturen");
  }

  public getVoorschotten(open):Observable<Factuur[]>{
    if(!open)
      return this.http.get<Factuur[]>(config.api+"voorschotten");
    else
      return this.http.get<Factuur[]>(config.api+"openvoorschotten");
  }

  public createFactuur(factuur):Observable<any>{
    return this.http.post<any>(config.api+"facturen", factuur);
  }

  public saveFactuur(factuur):Observable<any>{
    return this.http.put<any>(config.api+"facturen", factuur);
  }

  public getFactuur(id):Observable<Factuur>{
    let httpParams = new HttpParams().set('id', id);

    return this.http.get<Factuur>(config.api+"factuur",{params:httpParams});
  }

  public aanmanen(factuurId):Observable<any>{
    let httpParams = new HttpParams().set('id', factuurId);

    return this.http.get<any>(config.api+"aanmanen",{params:httpParams});
  }
}
