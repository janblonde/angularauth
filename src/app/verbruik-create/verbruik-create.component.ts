import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { IMyOptions } from 'ng-uikit-pro-standard';

import { VerbruikService } from '../verbruik.service';
import { KostentypesService } from '../kostentypes.service'
import { UnitService } from '../unit.service'
import { Verbruik } from '../verbruik';
import { VerbruikItem } from '../verbruikitem';


@Component({
  selector: 'app-verbruik-create',
  templateUrl: './verbruik-create.component.html',
  styleUrls: ['./verbruik-create.component.scss']
})
export class VerbruikCreateComponent implements OnInit {

  verbruik = {id: 0, type: "", fk_type: 0, van:"", tot:"", totaalverbruik:null, afgerekend: false}

  items: VerbruikItem[]=[]

  typeSelect = []
  selectedType = null


  public myDatePickerOptions: IMyOptions = {
      dateFormat: 'dd/mm/yyyy'
  }

  constructor(public verbruikService: VerbruikService,
              public kostentypesService: KostentypesService,
              public unitService: UnitService,
              public router: Router,
              private _location: Location) { }

  ngOnInit() {

    this.kostentypesService.getTypes()
      .subscribe(
        res => {
          res.rows.forEach((element)=>{
            this.typeSelect = [...this.typeSelect, { value: element.id, label: element.naam}]
          });
        })

    this.unitService.getUnits()
      .subscribe(
        res=>{
          res.forEach((element)=>{
            this.items.push({unit:element.naam, unit_fk:element.id, id:0, verbruik_fk:0, verbruikt:0})
          })
          console.log(this.items)
        },
        err=>console.log(err)
      )
  }

  getSelectedType(event: any){
    this.selectedType = event;
  }

  check(){
    let totaal = 0
    this.items.forEach((element)=>{
      totaal = parseFloat(totaal.toString()) + parseFloat(element.verbruikt.toString().replace(',','.'))
    })

    if(this.verbruik.totaalverbruik)
      this.verbruik.totaalverbruik = parseFloat(this.verbruik.totaalverbruik.toString().replace(',','.'))

    if(this.verbruik.totaalverbruik===totaal&&this.verbruik.van&&this.verbruik.tot&&this.verbruik.totaalverbruik!=null&&this.selectedType) return true
    else return false
  }

  createVerbruik(){

    let van = ""
    if(this.verbruik.van){
      let dag = this.verbruik.van.substr(0,2)
      let maand = this.verbruik.van.substr(3,2)
      let jaar = this.verbruik.van.substr(6,4)
      van = jaar + '-' + maand + '-' + dag
    }
    this.verbruik.van = van

    let tot = ""
    if(this.verbruik.tot){
      let dag = this.verbruik.tot.substr(0,2)
      let maand = this.verbruik.tot.substr(3,2)
      let jaar = this.verbruik.tot.substr(6,4)
      tot = jaar + '-' + maand + '-' + dag
    }
    this.verbruik.tot = tot

    if(this.selectedType){
      this.verbruik.fk_type = this.selectedType
    }

    if(this.verbruik.totaalverbruik)
      this.verbruik.totaalverbruik = parseFloat(this.verbruik.totaalverbruik.toString().replace(',','.'))
    else
      this.verbruik.totaalverbruik = 0

    this.verbruikService.createVerbruik(this.verbruik)
      .subscribe(
        res => {
          this.items.forEach((element)=>{
            element.verbruik_fk = res.rows[0].id
          })
          this.verbruikService.createVerbruikItems(this.items)
            .subscribe(
              res=>this.router.navigate(['/verbruiklist']),
              err=>console.log(err)
            )
        },
        err => console.log(err)
      )
    this.verbruik = {id: 0, type: "", fk_type: 0, van:"", tot:"", totaalverbruik:0, afgerekend: false}

  }

  back(){
    this._location.back()
  }

}
