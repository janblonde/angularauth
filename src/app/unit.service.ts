import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

    constructor(private http: HttpClient) {
     }

    public getUnits():Observable<[{id, naam, duizendste}]>{
      let response = this.http.get<[{id, naam, duizendste}]>("http://localhost:3000/api/units");
      return response;
    }

    public getUnit(id):Observable<{id, naam, duizendste}>{
      let httpParams = new HttpParams().set('id', id);

      let response = this.http.get<{id, naam, duizendste}>("http://localhost:3000/api/unit",{params:httpParams});
      return response;
    }

    public createUnit(unit: {naam, duizendste}):Observable<any>{
      return this.http.post<any>("http://localhost:3000/api/units", unit);
    }

    public saveUnit(unit: {id, naam, duizendste}):Observable<any>{
      return this.http.put<any>("http://localhost:3000/api/units", unit);
    }

}
