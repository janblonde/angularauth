import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Eigenaar } from './eigenaar';

@Injectable({
  providedIn: 'root'
})
export class EigenaarService {

  constructor(private http: HttpClient) { }

  public getEigenaar(id):Observable<Eigenaar>{
    let httpParams = new HttpParams().set('id', id);

    return this.http.get<Eigenaar>("http://localhost:3000/api/eigenaar",{params:httpParams});
  }

  public getEigenaars():Observable<Eigenaar[]>{
    console.log('geteigenaars');
    return this.http.get<Eigenaar[]>("http://localhost:3000/api/eigenaars");
  }

  public createEigenaar(eigenaar): Observable<any> {
    console.log(eigenaar);
    return this.http.post<any>("http://localhost:3000/api/eigenaars", eigenaar);
  }

  public saveEigenaar(eigenaar): Observable<any> {
    return this.http.put<any>("http://localhost:3000/api/eigenaars", eigenaar);
  }
}
