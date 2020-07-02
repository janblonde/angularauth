import { Component, OnInit } from '@angular/core';
import { AfrekeningService } from '../afrekening.service';
import { Afrekening } from '../afrekening'

@Component({
  selector: 'app-afrekening-list',
  templateUrl: './afrekening-list.component.html',
  styleUrls: ['./afrekening-list.component.scss']
})
export class AfrekeningListComponent implements OnInit {

  afrekeningen: Afrekening[]

  constructor(public afrekeningService: AfrekeningService) { }

  ngOnInit() {
    this.afrekeningService.getAfrekeningen()
      .subscribe(
        res => {
          //console.log(res)
          this.afrekeningen = res
          console.log(this.afrekeningen)
        },
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
