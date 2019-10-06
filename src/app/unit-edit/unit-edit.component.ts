import { Component, OnInit } from '@angular/core';
import { UnitService } from '../unit.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unit-edit',
  templateUrl: './unit-edit.component.html',
  styleUrls: ['./unit-edit.component.css']
})
export class UnitEditComponent implements OnInit {

  unit: {id, naam, duizendste };

  constructor(public unitService: UnitService,
              public _router: Router,
              private route: ActivatedRoute) { }

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
    this.unitService.saveUnit(this.unit)
      .subscribe(
        res => {
          console.log(res);
          this._router.navigate(['/unitlist']);
        },
        err => console.log(err)
      );
    this.unit = {id: 0, naam: "", duizendste: 0}
  }
}
