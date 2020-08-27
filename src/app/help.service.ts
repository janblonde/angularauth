import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Message } from './message';
import { config } from './config';

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  constructor(private http: HttpClient) { }

  public sendMessage(message): Observable<any>{
    return this.http.post<any>(config.api+"sendmessage", message);
  }
}
