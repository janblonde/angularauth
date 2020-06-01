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

  typeOptions = [
    {value:'Appartement', label:'Appartement'},
    {value:'Garage', label:'Garage'}
  ]

  selectedType = null;

  constructor(public unitService: UnitService,
              public setupService: SetupService,
              public _router: Router,
              private route: ActivatedRoute,
              private _location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.unitService.getUnit(id)
      .subscribe(
        res => {
          this.selectedType = res.type
          this.unit = res},
        err => console.log(err)
      )
  }

  getSelectedType(event: any){
    this.selectedType = event
  }

  saveUnit(){
    this.unit.duizendste = parseFloat(this.unit.duizendste.toString().replace(',','.'))
    this.unit.type = this.selectedType
    this.unitService.saveUnit(this.unit)
      .subscribe(
        res => {
          this.setupService.update();
          this._router.navigate(['/unitlist']);
        },
        err => console.log(err)
      );
    this.unit = {id: 0, naam: "", type:null, duizendste: 0, voorschot: null, eigenaar:"", eigenaarid: 0}
  }

  back(){
    this._location.back()
  }
}
