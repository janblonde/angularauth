import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { KostenType } from './kostentype';
import { config } from './config';

@Injectable({
  providedIn: 'root'
})
export class KostentypesService {

  constructor(private http: HttpClient) { }

  public getTypes():Observable<any>{
    return this.http.get<any>(config.api + "kostentypes");
  }

  public getAllTypes():Observable<any>{
    return this.http.get<any>(config.api + "alltypes");
  }

  public createType(kostentype): Observable<any>{
    return this.http.post<any>(config.api+"kostentypes", kostentype);
  }

  public updateType(kostentype): Observable<any>{
    return this.http.put<any>(config.api+"kostentype", kostentype)
  }

  public getType(id): Observable<any>{
    let httpParams = new HttpParams().set('id', id);
    return this.http.get<any>(config.api+"kostentype", {params:httpParams});
  }

  public createAangepasteVerdeling(verdelingen): Observable<any>{
    return this.http.post<any>(config.api+"aangepasteverdeling", verdelingen);
  }

  public updateAangepasteVerdeling(verdelingen): Observable<any>{
    return this.http.put<any>(config.api+"aangepasteverdeling", verdelingen);
  }

  public getAangepasteVerdeling(kostentypeFK, unitFK): Observable<any>{
    let httpParams = new HttpParams()
      .set('kostentypeFK', kostentypeFK)
      .set('unitFK', unitFK)
    return this.http.get<any>(config.api+"aangepasteverdeling", {params:httpParams});
  }
}
