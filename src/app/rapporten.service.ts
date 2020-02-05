import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Balans} from './balans';
import { config } from './config'

@Injectable({
  providedIn: 'root'
})
export class RapportenService {

  constructor(private http: HttpClient) { }

  public getWerkrekeningRapport():Observable<[]>{
    return this.http.get<[]>(config.api + "werkrekeningrapport")
  }

  public getInkomstenRapport():Observable<[]>{
    return this.http.get<[]>(config.api + "inkomstenrapport")
  }

  public getUitgavenRapport():Observable<[]>{
    return this.http.get<[]>(config.api + "uitgavenrapport")
  }

  public getBalans():Observable<Balans>{
    return this.http.get<Balans>(config.api + "balans")
  }


}
