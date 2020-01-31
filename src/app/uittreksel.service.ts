import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Uittreksel } from './uittreksel';
import { Partner } from './partner';

@Injectable({
  providedIn: 'root'
})
export class UittrekselService {

  constructor(private http: HttpClient) { }

  public getUittreksels(type):Observable<Uittreksel[]>{
      let httpParams = new HttpParams().set('type',type);

      return this.http.get<Uittreksel[]>("http://localhost:3000/api/uittreksels",{params: httpParams});
  }

  public getOngekoppeldeUittreksels(): Observable<Uittreksel[]>{
    return this.http.get<Uittreksel[]>("http://localhost:3000/api/ongekoppelde_uittreksels");
  }

  public getUittreksel(id): Observable<Uittreksel>{
    let httpParams = new HttpParams().set('id', id);

    return this.http.get<Uittreksel>("http://localhost:3000/api/uittreksel",{params:httpParams});
  }

  public koppelUittreksels(partner: Partner): Observable<any>{
    console.log('koppel service');
    return this.http.put<any>("http://localhost:3000/api/uittreksels", partner);
  }

  public editUittreksel(uittreksel):Observable<any>{
    return this.http.put<any>("http://localhost:3000/api/uittreksel", uittreksel);
  }
}
