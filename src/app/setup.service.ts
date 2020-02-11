import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetupService {

  setup = 'false'

  constructor() { }

  public set(setup){
    this.setup = setup;
    console.log('set setup')
    console.log(this.setup)
  }
}
