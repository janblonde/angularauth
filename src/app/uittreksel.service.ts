import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { HttpParams } from '@angular/common/http';
import { Uittreksel } from './uittreksel';

@Injectable({
  providedIn: 'root'
})
export class UittrekselService {

  constructor(private http: HttpClient) { }

  public getUittreksels():Observable<Uittreksel[]>{
      console.log('service');
      return this.http.get<Uittreksel[]>("http://localhost:3000/api/uittreksels");
  }
}
