import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Unit } from './unit';
import { config } from './config';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

    constructor(private http: HttpClient) {
     }

    public getUnits():Observable<Unit[]>{
      return this.http.get<Unit[]>(config.api + "units");
    }

    public getUnit(id):Observable<Unit>{
      let httpParams = new HttpParams().set('id', id);

      return this.http.get<Unit>(config.api + "unit",{params:httpParams});
    }

    public createUnit(unit: Unit):Observable<any>{
      return this.http.post<any>(config.api + "units", unit);
    }

    public saveUnit(unit: Unit):Observable<any>{
      return this.http.put<any>(config.api + "units", unit);
    }

}
