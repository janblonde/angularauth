import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Eigenaar } from './eigenaar';
import { config } from './config';

@Injectable({
  providedIn: 'root'
})
export class EigenaarService {

  constructor(private http: HttpClient) { }

  public getEigenaar(id):Observable<Eigenaar>{
    let httpParams = new HttpParams().set('id', id);

    return this.http.get<Eigenaar>(config.api+"eigenaar",{params:httpParams});
  }

  public getEigenaars():Observable<Eigenaar[]>{
    console.log('geteigenaars');
    return this.http.get<Eigenaar[]>(config.api+"eigenaars");
  }

  public createEigenaar(eigenaar): Observable<any> {
    return this.http.post<any>(config.api+"eigenaars", eigenaar);
  }

  public saveEigenaar(eigenaar): Observable<any> {
    return this.http.put<any>(config.api+"eigenaars", eigenaar);
  }

  public invite(eigenaar): Observable<any> {
    return this.http.post<any>(config.api+"invite",eigenaar)
  }
}
