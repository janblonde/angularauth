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

  selectedType='werk';

  constructor(public uittrekselService: UittrekselService) { }

  ngOnInit() {
    console.log(this.selectedType)
    this.uittrekselService.getUittreksels(this.selectedType)
      .subscribe(
        res => this.uittreksels = res,
        err => console.log(err)
      )
  }

  ngDoCheck(){
    this.uittrekselService.getUittreksels(this.selectedType)
      .subscribe(
        res => this.uittreksels = res,
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
