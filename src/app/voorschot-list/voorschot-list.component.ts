import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FactuurService } from '../factuur.service';
import { Factuur } from '../factuur';

@Component({
  selector: 'app-voorschot-list',
  templateUrl: './voorschot-list.component.html',
  styleUrls: ['./voorschot-list.component.css']
})
export class VoorschotListComponent implements OnInit {

  facturen: Factuur[];

  open = false;

  constructor(public factuurService: FactuurService) { }

  ngOnInit() {
    this.factuurService.getVoorschotten(false)
      .subscribe(
        res => {console.log(res); this.facturen = res},
        err => console.log(err)
      )
  }

  switch(){
    this.factuurService.getVoorschotten(!this.open)
      .subscribe(
        res => this.facturen = res,
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
