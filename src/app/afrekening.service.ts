import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { config } from './config';


@Injectable({
  providedIn: 'root'
})
export class AfrekeningService {

  constructor(public http: HttpClient) { }

  public getPreview(van, tot): Observable<any>{
    let httpParams = new HttpParams()
      .set('van', van)
      .set('tot', tot)
    return this.http.get<any>(config.api+"preview", {params:httpParams});
  }

  public validate(items, van, tot):Observable<any>{
    let params={van:van, tot:tot, items:items}
    return this.http.post<any>(config.api + "validate", params);
  }
}
