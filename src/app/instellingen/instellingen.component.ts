import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { InstellingenService } from '../instellingen.service';
import { Instellingen } from '../instellingen';
import { SetupService } from '../setup.service';

import { IMyOptions } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-instellingen',
  templateUrl: './instellingen.component.html',
  styleUrls: ['./instellingen.component.scss']
})
export class InstellingenComponent implements OnInit {

  instellingen:Instellingen = {id:0, adres:"",periodiciteit:"",voorschotdag:"",kosten:null,verdeelsleutel:null,
                                werkrekeningnummer:"",nieuw:false,overnamedatum:"",overgenomen_werkrekening:null,reserverekeningnummer:"", overgenomen_reserverekening:null}

  periodiciteitOptions = [
    {value:1, label: 'Maandelijks', selected: true},
    {value:3, label: 'Om de 3 maanden'}
  ]

  selectedPeriodiciteit = null;

  dagOptions = []

  selectedDag = null;

  public myDatePickerOptions: IMyOptions = {
      dateFormat: 'dd/mm/yyyy'
  }

  constructor(public instellingenService:InstellingenService,
              private setupService: SetupService,
              public router: Router,
              private _location: Location) { }

  ngOnInit() {

    for(var i=1;i<31;i++){
      this.dagOptions.push({value:i, label:i});
    }

    this.instellingenService.getInstellingen()
      .subscribe(
        res => {
          console.log(res)
          if(res[0]){
            this.instellingen = res[0]
            this.selectedDag = parseInt(res[0].dag_voorschot)
            this.selectedPeriodiciteit = parseInt(res[0].periodiciteit_voorschot)

            let overnamedatum = ""
            if(this.instellingen.overnamedatum){
              let dag = this.instellingen.overnamedatum.substr(8,2)
              let maand = this.instellingen.overnamedatum.substr(5,2)
              let jaar = this.instellingen.overnamedatum.substr(0,4)
              overnamedatum = dag + "/" + maand + "/" + jaar
            }
            this.instellingen.overnamedatum = overnamedatum
            //this.modus = 'edit'
          }
        },
        err => console.log(err)
      )

  }

  check():boolean{
    if(this.instellingen.adres&&this.selectedPeriodiciteit&&this.instellingen.verdeelsleutel&&
        this.selectedDag&&this.instellingen.reserverekeningnummer&&
        this.instellingen.werkrekeningnummer) {
      if(!this.instellingen.nieuw){
        if(this.instellingen.overnamedatum) return true
        else return false
      }else{
          return true
      }
    }else{
      return false
    }
  }

  getSelectedPeriodiciteit(event: any){
    this.selectedPeriodiciteit = event;
  }

  getSelectedDag(event: any){
    this.selectedDag = event;
  }

  saveInstellingen(){
    if(this.selectedPeriodiciteit)
      this.instellingen.periodiciteit = this.selectedPeriodiciteit;

    if(this.selectedDag)
      this.instellingen.voorschotdag = this.selectedDag;

    if(this.instellingen.overgenomen_werkrekening)
      this.instellingen.overgenomen_werkrekening = parseFloat(this.instellingen.overgenomen_werkrekening.toString().replace(',','.'))
    else
      this.instellingen.overgenomen_werkrekening = 0

    if(this.instellingen.overgenomen_reserverekening)
      this.instellingen.overgenomen_reserverekening = parseFloat(this.instellingen.overgenomen_reserverekening.toString().replace(',','.'))
    else
      this.instellingen.overgenomen_reserverekening = 0

    let overnamedatum = ""
    if(this.instellingen.overnamedatum){
      let dag = this.instellingen.overnamedatum.substr(0,2)
      let maand = this.instellingen.overnamedatum.substr(3,2)
      let jaar = this.instellingen.overnamedatum.substr(6,4)
      overnamedatum = jaar + '-' + maand + '-' + dag
    }
    this.instellingen.overnamedatum = overnamedatum

    this.instellingenService.editInstellingen(this.instellingen)
      .subscribe(
        res => {
          this.setupService.updateAndReturn()
            .subscribe(
              res => {
                if(res.setup=='true') this.router.navigate(['/dashboard'])
                else this.router.navigate(['/unitlist'])
              },
              err => console.log(err)
            )
          //this.router.navigate(['/dashboard'])
        },
        err => console.log(err)
      )
  }

  next(){

    if(this.selectedPeriodiciteit)
      this.instellingen.periodiciteit = this.selectedPeriodiciteit;

    if(this.selectedDag)
      this.instellingen.voorschotdag = this.selectedDag;

    if(this.instellingen.overgenomen_werkrekening)
      this.instellingen.overgenomen_werkrekening = parseFloat(this.instellingen.overgenomen_werkrekening.toString().replace(',','.'))
    else
      this.instellingen.overgenomen_werkrekening = 0

    if(this.instellingen.overgenomen_reserverekening)
      this.instellingen.overgenomen_reserverekening = parseFloat(this.instellingen.overgenomen_reserverekening.toString().replace(',','.'))
    else
      this.instellingen.overgenomen_reserverekening = 0

    let overnamedatum = ""
    if(this.instellingen.overnamedatum){
      let dag = this.instellingen.overnamedatum.substr(0,2)
      let maand = this.instellingen.overnamedatum.substr(3,2)
      let jaar = this.instellingen.overnamedatum.substr(6,4)
      overnamedatum = jaar + '-' + maand + '-' + dag
    }
    this.instellingen.overnamedatum = overnamedatum

    this.instellingenService.editInstellingen(this.instellingen)
      .subscribe(
        res => this.router.navigate(['/unitlist']),
        err => console.log(err)
      )
  }

  back(){
    this._location.back()
  }
}
