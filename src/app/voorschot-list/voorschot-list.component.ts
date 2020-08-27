import { Component, OnInit, QueryList, ViewChildren, ViewChild } from '@angular/core';
import { FactuurService } from '../factuur.service';
import { Factuur } from '../factuur';

import { ModalDirective } from 'ng-uikit-pro-standard'

@Component({
  selector: 'app-voorschot-list',
  templateUrl: './voorschot-list.component.html',
  styleUrls: ['./voorschot-list.component.css']
})
export class VoorschotListComponent implements OnInit {

  facturen: Factuur[];

  selectedPartner = null;
  selectedId = null;

  open = false;

  readOnly = true

  @ViewChild('basicModal', { static: true }) basicModal: ModalDirective;

  constructor(public factuurService: FactuurService) { }

  ngOnInit() {
    if(localStorage.getItem('role')==='nimda') this.readOnly = false;

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

  aanmanenPreview(factuur){
    this.selectedPartner = factuur.partner
    this.selectedId = factuur.id
    //console.log(selectedPartner)
    console.log(factuur)
  }

  aanmanen(){
    this.factuurService.aanmanen(this.selectedId)
      .subscribe(
        res => {
          this.factuurService.getVoorschotten(this.open)
            .subscribe(
              res => this.facturen = res,
              err => console.log(err)
            )
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
