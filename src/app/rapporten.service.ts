import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Balans} from './balans';

@Injectable({
  providedIn: 'root'
})
export class RapportenService {

  constructor(private http: HttpClient) { }

  public getWerkrekeningRapport():Observable<[]>{
    return this.http.get<[]>("http://localhost:3000/api/werkrekeningrapport")
  }

  public getInkomstenRapport():Observable<[]>{
    return this.http.get<[]>("http://localhost:3000/api/inkomstenrapport")
  }

  public getUitgavenRapport():Observable<[]>{
    return this.http.get<[]>("http://localhost:3000/api/uitgavenrapport")
  }

  public getBalans():Observable<Balans>{
    return this.http.get<Balans>("http://localhost:3000/api/balans")
  }


}
