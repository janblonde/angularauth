import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UnitService } from '../unit.service';
import { Unit } from '../unit';
import { InstellingenService } from '../instellingen.service';
import { Instellingen } from '../instellingen';

@Component({
  selector: 'app-unit-create',
  templateUrl: './unit-create.component.html',
  styleUrls: ['./unit-create.component.css']
})
export class UnitCreateComponent implements OnInit {

  unit: Unit = {id: 0, naam: "", type: null, duizendste: null, voorschot: null, eigenaar:"", eigenaarid: 0, saldo_afrekening: null};

  instellingen: Instellingen;

  typeOptions = [
    {value:'Appartement', label:'Appartement'},
    {value:'Garage', label:'Garage'}
  ]

  selectedType = null;

  constructor(public unitService: UnitService,
              public instellingenService: InstellingenService,
              public _router: Router,
              private _location: Location) { }

  ngOnInit() {
    this.instellingenService.getInstellingen()
      .subscribe(
        res => this.instellingen = res[0]
      )
  }

  getSelectedType(event: any){
    this.selectedType = event
  }

  createUnit(){
    this.unit.duizendste = parseFloat(this.unit.duizendste.toString().replace(',','.'))
    if(this.unit.saldo_afrekening) this.unit.saldo_afrekening = parseFloat(this.unit.saldo_afrekening.toString().replace(',','.'))
    this.unit.type = this.selectedType
    this.unitService.createUnit(this.unit)
      .subscribe(
        res => {
          this._router.navigate(['/unitlist']);
        },
        err => console.log(err)
      );
    this.unit = {id: 0, naam: "", type:null, duizendste: 0, voorschot: null, eigenaar:"", eigenaarid: 0, saldo_afrekening: null}
  }

  check():boolean{
    if(this.unit.naam&&this.selectedType&&this.unit.duizendste) return true
    else return false
  }

  back(){
    this._location.back()
  }
}
