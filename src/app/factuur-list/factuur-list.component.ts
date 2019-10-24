import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FactuurService } from '../factuur.service';
import { Factuur } from '../factuur';

@Component({
  selector: 'app-factuur-list',
  templateUrl: './factuur-list.component.html',
  styleUrls: ['./factuur-list.component.css']
})
export class FactuurListComponent implements OnInit {

  facturen: Factuur[];

  constructor(public factuurService: FactuurService) { }

  ngOnInit() {
    this.factuurService.getFacturen()
      .subscribe(
        res => {console.log(res); this.facturen = res},
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
