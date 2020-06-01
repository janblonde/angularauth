import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Verbruik } from './verbruik';
import { config } from './config';

@Injectable({
  providedIn: 'root'
})
export class VerbruikService {

  constructor(private http: HttpClient) { }

  public createVerbruik(verbruik):Observable<any>{
    return this.http.post<any>(config.api+"verbruiken", verbruik);
  }

  public createVerbruikItems(items): Observable<any>{
    return this.http.post<any>(config.api+"verbruikitems", items);
  }

  public getVerbruiken():Observable<any>{
    return this.http.get<any>(config.api + "verbruiken");
  }

  public getVerbruik(id):Observable<any>{
    let httpParams = new HttpParams().set('id', id);
    return this.http.get<any>(config.api + "verbruik", {params:httpParams});
  }

  public getVerbruikItems(id):Observable<any>{
    let httpParams = new HttpParams().set('id', id);
    return this.http.get<any>(config.api + "verbruikitems", {params:httpParams});
  }

  public updateVerbruik(verbruik): Observable<any>{
    return this.http.put<any>(config.api+"verbruik", verbruik);
  }

  public updateVerbruikItems(verbruikItems): Observable<any>{
    return this.http.put<any>(config.api+"verbruikitems", verbruikItems);
  }
}
