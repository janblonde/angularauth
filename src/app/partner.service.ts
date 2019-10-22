import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(private http: HttpClient) { }

  public createPartner(partner): Observable<any> {
    //console.log(partner);
    return this.http.post<any>("http://localhost:3000/api/partners", partner);
  }
}
