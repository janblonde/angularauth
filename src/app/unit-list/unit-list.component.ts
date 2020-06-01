import { Component, OnInit } from '@angular/core';
import { UnitService } from '../unit.service';
import { InstellingenService } from '../instellingen.service';
import { Instellingen } from '../instellingen';
import { EigenaarService } from '../eigenaar.service';
import { Eigenaar } from '../eigenaar';
import { Router } from '@angular/router';
import { Unit } from '../unit';
import { SetupService } from '../setup.service';

import { ModalDirective } from 'ng-uikit-pro-standard'

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css']
})

export class UnitListComponent implements OnInit {

  units: Unit[];
  selectedUnit = null;
  modus=null;

  complete = 0;

  werkrekeningsaldo = 0;
  reserverekeningsaldo = 0;

  instellingen: Instellingen;

  eigenaars: Eigenaar[];

  constructor(public unitService: UnitService,
              public instellingenService: InstellingenService,
              public eigenaarService: EigenaarService,
              public setupService: SetupService,
              public _router: Router) { }

  ngOnInit() {
    this.unitService.getUnits()
      .subscribe(
        res => {
          console.log(res);
          this.units = res},
        err => console.log(err)
      )

    this.eigenaarService.getEigenaars()
      .subscribe(
        res => {
          this.eigenaars = res
          res.forEach((element)=> {
            if(element.overgenomen_werkrekening)
              this.werkrekeningsaldo = this.werkrekeningsaldo + parseFloat(element.overgenomen_werkrekening.toString())
            if(element.overgenomen_reserverekening)
              this.reserverekeningsaldo = this.reserverekeningsaldo + parseFloat(element.overgenomen_reserverekening.toString())
          })
        },
        err => console.log(err)
      )

    this.instellingenService.getInstellingen()
      .subscribe(
        res => this.instellingen = res[0]
      )
  }

  checkWerkrekening(){
    if(this.werkrekeningsaldo==this.instellingen.overgenomen_werkrekening) return true
    else return false
  }

  checkReserverekening(){
    if(this.reserverekeningsaldo==this.instellingen.overgenomen_reserverekening) return true
    else return false
  }

  ngDoCheck(){
    this.complete = 0;

    if(this.units){
      this.units.forEach((element)=> {
        this.complete = this.complete + parseFloat(element.duizendste.toString());
      });
    }
  }

  selectEigenaar(eigenaar){

    if(this.modus==='add'){

      this.unitService.addEigenaar(eigenaar.id, this.selectedUnit)
        .subscribe(
          res=>{
            this.unitService.getUnits()
              .subscribe(
                res => this.units = res,
                err => console.log(err)
              )
          },
          err=>console.log(err)
        )
    }else if(this.modus==='update'){

      this.unitService.updateEigenaar(eigenaar.id, this.selectedUnit)
        .subscribe(
          res=>{
            this.unitService.getUnits()
              .subscribe(
                res => this.units = res,
                err => console.log(err)
              )
          },
          err=>console.log(err)
        )
    }
  }
}
