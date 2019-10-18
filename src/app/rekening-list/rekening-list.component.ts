import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Uittreksel } from '../uittreksel';
import { UittrekselService } from '../uittreksel.service';

@Component({
  selector: 'app-rekening-list',
  templateUrl: './rekening-list.component.html',
  styleUrls: ['./rekening-list.component.css']
})

export class RekeningListComponent implements OnInit {

  uittreksels: Uittreksel[];

  constructor(public uittrekselService: UittrekselService) { }

  ngOnInit() {
    console.log('ngoninit')
    this.uittrekselService.getUittreksels()
      .subscribe(
        res => {console.log(res); this.uittreksels = res},
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
