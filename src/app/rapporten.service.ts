import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RapportenService {

  constructor(private http: HttpClient) { }

  public getWerkrekeningRapport():Observable<[]>{
    return this.http.get<[]>("http://localhost:3000/api/werkrekeningrapport")
  }
}
