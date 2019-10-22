import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KostenType } from './kostentype';

@Injectable({
  providedIn: 'root'
})
export class KostentypesService {

  constructor(private http: HttpClient) { }

  public getTypes():Observable<KostenType[]>{
    return this.http.get<KostenType[]>("http://localhost:3000/api/kostentypes");
  }
}
