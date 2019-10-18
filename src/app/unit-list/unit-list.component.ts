import { Component, OnInit } from '@angular/core';
import { UnitService } from '../unit.service';
import { Router } from '@angular/router';
import { Unit } from '../unit';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css']
})

export class UnitListComponent implements OnInit {

  units: Unit[];

  complete = 0;

  constructor(public unitService: UnitService,
              public _router: Router) { }

  ngOnInit() {
    this.unitService.getUnits()
      .subscribe(
        res => {
          console.log(res);
          this.units = res},
        err => console.log(err)
      )
  }

  ngDoCheck(){
    this.complete=0;
    if(this.units){
      this.units.forEach((element)=> {
        this.complete = this.complete + element.duizendste;});
    }
    //console.log(this.complete);
  }
}
