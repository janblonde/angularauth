import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UnitService } from '../unit.service';
import { Unit } from '../unit';
import { SetupService } from '../setup.service';

@Component({
  selector: 'app-unit-edit',
  templateUrl: './unit-edit.component.html',
  styleUrls: ['./unit-edit.component.css']
})
export class UnitEditComponent implements OnInit {

  unit: Unit;

  constructor(public unitService: UnitService,
              public setupService: SetupService,
              public _router: Router,
              private route: ActivatedRoute,
              private _location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.unitService.getUnit(id)
      .subscribe(
        res => {
          console.log(res);
          this.unit = res},
        err => console.log(err)
      )
  }

  saveUnit(){
    this.unit.duizendste = parseFloat(this.unit.duizendste.toString().replace(',','.'))
    this.unitService.saveUnit(this.unit)
      .subscribe(
        res => {
          this.setupService.update();
          this._router.navigate(['/unitlist']);
        },
        err => console.log(err)
      );
    this.unit = {id: 0, naam: "", duizendste: 0, eigenaar:"", eigenaarid: 0}
  }

  back(){
    this._location.back()
  }
}
