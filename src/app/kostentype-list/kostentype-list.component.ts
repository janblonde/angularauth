import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { KostentypesService } from '../kostentypes.service';
import { KostenType } from '../kostentype';
import { SetupService } from '../setup.service'

@Component({
  selector: 'app-kostentype-list',
  templateUrl: './kostentype-list.component.html',
  styleUrls: ['./kostentype-list.component.scss']
})
export class KostentypeListComponent implements OnInit {

  kostentypes: KostenType[]

  constructor(public kostentypesService: KostentypesService,
              public setupService: SetupService) { }

  ngOnInit() {
    this.kostentypesService.getTypes()
      .subscribe(
        res => {this.kostentypes = res.rows;console.log(res)},
        err => console.log(err)
      )
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
