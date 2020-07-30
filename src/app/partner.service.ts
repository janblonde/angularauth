import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { config } from './config'

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(private http: HttpClient) { }

  public createPartner(partner): Observable<any> {
    //console.log(partner);
    return this.http.post<any>(config.api + "partners", partner);
  }

  public getLeveranciers(): Observable<any> {
    return this.http.get<any>(config.api + "leveranciers");
  }

  public getLeverancier(id): Observable<any> {
    let httpParams = new HttpParams().set('id', id)
    return this.http.get<any>(config.api + "leverancier", {params: httpParams})
  }
}
