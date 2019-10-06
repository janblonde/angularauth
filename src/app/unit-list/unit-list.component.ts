import { Component, OnInit } from '@angular/core';
import { UnitService } from '../unit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css']
})
export class UnitListComponent implements OnInit {

  units;
  selectedAppartement;

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

  public selectUnit(unit){
    this._router.navigate(['/unitedit']);
  }

  public addUnit(){
    this._router.navigate(['/unitcreate']);
  }

}
