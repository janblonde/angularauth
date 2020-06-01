import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { VerbruikService } from '../verbruik.service';
import { Verbruik } from '../verbruik';

@Component({
  selector: 'app-verbruik-list',
  templateUrl: './verbruik-list.component.html',
  styleUrls: ['./verbruik-list.component.scss']
})
export class VerbruikListComponent implements OnInit {

  verbruiken: Verbruik[]

  constructor(public verbruikService: VerbruikService) { }

  ngOnInit() {
    this.verbruikService.getVerbruiken()
      .subscribe(
        res => {this.verbruiken = res;console.log(res)},
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
