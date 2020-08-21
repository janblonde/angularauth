import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { KostentypesService } from '../kostentypes.service';
import { KostenType } from '../kostentype';
import { SetupService } from '../setup.service';
import { InstellingenService } from '../instellingen.service';
import { Instellingen } from '../instellingen';

@Component({
  selector: 'app-kostentype-list',
  templateUrl: './kostentype-list.component.html',
  styleUrls: ['./kostentype-list.component.scss']
})
export class KostentypeListComponent implements OnInit {

  kostentypes: KostenType[]

  instellingen: Instellingen

  constructor(public kostentypesService: KostentypesService,
              public setupService: SetupService,
              public instellingenService: InstellingenService,
              public _router: Router) { }

  ngOnInit() {
    this.kostentypesService.getTypes()
      .subscribe(
        res => {this.kostentypes = res.rows;console.log(res)},
        err => console.log(err)
      )

    this.instellingenService.getInstellingen()
      .subscribe(
        res => this.instellingen = res[0],
        err => console.log(err)
      )
  }

  setupVoltooien(){
    this.setupService.voltooien()
    this._router.navigate(['/dashboard'])
  }

  //sorting
  key: string = 'id'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  //initializing p to one
  p: number = 1;

}
