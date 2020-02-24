import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from './config';

@Injectable({
  providedIn: 'root'
})
export class SetupService {

  setup = 'false'

  constructor(private http: HttpClient) { }

  public set(setup){
    this.setup = setup;
    // console.log('set setup')
    // console.log(this.setup)
  }

  public update(){
    this.http.get<any>(config.api + "setup")
      .subscribe(
        res => this.setup = res.setup,
        err => console.log(err)
      )
  }

  public updateAndReturn():Observable<any>{
    let ret = this.http.get<any>(config.api + "setup")
    ret.subscribe(
      res => this.setup = res.setup,
      err => console.log(err)
    )
    return ret
  }
}
