import { Component, OnInit } from '@angular/core';
import { UnitService } from '../unit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unit-create',
  templateUrl: './unit-create.component.html',
  styleUrls: ['./unit-create.component.css']
})
export class UnitCreateComponent implements OnInit {

  unit: {naam, duizendste } = {naam: "", duizendste: 0};

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
    this.unit = {naam: "", duizendste: 0}
  }

}
