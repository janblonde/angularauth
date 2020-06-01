import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UnitService } from '../unit.service';
import { Unit } from '../unit';

@Component({
  selector: 'app-unit-create',
  templateUrl: './unit-create.component.html',
  styleUrls: ['./unit-create.component.css']
})
export class UnitCreateComponent implements OnInit {

  unit: Unit = {id: 0, naam: "", type: null, duizendste: null, voorschot: null, eigenaar:"", eigenaarid: 0};

  typeOptions = [
    {value:'Appartement', label:'Appartement'},
    {value:'Garage', label:'Garage'}
  ]

  selectedType = null;

  constructor(public unitService: UnitService,
              public _router: Router,
              private _location: Location) { }

  ngOnInit() {
  }

  getSelectedType(event: any){
    this.selectedType = event
  }

  createUnit(){
    this.unit.duizendste = parseFloat(this.unit.duizendste.toString().replace(',','.'))
    this.unit.type = this.selectedType
    this.unitService.createUnit(this.unit)
      .subscribe(
        res => {
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
