import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
}
