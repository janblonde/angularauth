import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Uittreksel } from './uittreksel';
import { Partner } from './partner';
import { config} from './config'

@Injectable({
  providedIn: 'root'
})
export class UittrekselService {

  constructor(private http: HttpClient) { }

  public getUittreksels(type):Observable<Uittreksel[]>{
      let httpParams = new HttpParams().set('type',type);

      return this.http.get<Uittreksel[]>(config.api + "uittreksels",{params: httpParams});
  }

  public getOngekoppeldeUittreksels(): Observable<Uittreksel[]>{
    return this.http.get<Uittreksel[]>(config.api + "ongekoppelde_uittreksels");
  }

  public getUittreksel(id): Observable<Uittreksel>{
    let httpParams = new HttpParams().set('id', id);

    return this.http.get<Uittreksel>(config.api + "uittreksel",{params:httpParams});
  }

  public koppelUittreksels(partner: Partner): Observable<any>{
    return this.http.put<any>(config.api + "uittreksels", partner);
  }

  public editUittreksel(uittreksel):Observable<any>{
    return this.http.put<any>(config.api + "uittreksel", uittreksel);
  }
}
