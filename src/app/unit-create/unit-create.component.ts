import { Component, OnInit } from '@angular/core';
import { UnitService } from '../unit.service';
import { Router } from '@angular/router';
import { Unit } from '../unit';

@Component({
  selector: 'app-unit-create',
  templateUrl: './unit-create.component.html',
  styleUrls: ['./unit-create.component.css']
})
export class UnitCreateComponent implements OnInit {

  unit: Unit = {id: 0, naam: "", duizendste: null, eigenaar:"", eigenaarid: 0};

  constructor(public unitService: UnitService,
              public _router: Router) { }

  ngOnInit() {
  }

  createUnit(){
    this.unitService.createUnit(this.unit)
      .subscribe(
        res => {
          console.log(res);
          this._router.navigate(['/unitlist']);
        },
        err => console.log(err)
      );
    this.unit = {id: 0, naam: "", duizendste: 0, eigenaar:"", eigenaarid: 0}
  }

}
