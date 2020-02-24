import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { InstellingenService } from '../instellingen.service';
import { Instellingen } from '../instellingen';
import { SetupService } from '../setup.service';

@Component({
  selector: 'app-instellingen',
  templateUrl: './instellingen.component.html',
  styleUrls: ['./instellingen.component.scss']
})
export class InstellingenComponent implements OnInit {

  instellingen:Instellingen = {id:0, adres:"",periodiciteit:"",voorschotdag:"",kosten:null,
                                werkrekeningnummer:"",nieuw:false,overgenomen_werkrekening:null,reserverekeningnummer:"", overgenomen_reserverekening:null}

  periodiciteitOptions = [
    {value:1, label: 'Maandelijks', selected: true},
    {value:3, label: 'Om de 3 maanden'}
  ]

  selectedPeriodiciteit = null;

  dagOptions = []

  selectedDag = null;

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
            //this.modus = 'edit'
          }
        },
        err => console.log(err)
      )

  }

  check():boolean{
    if(this.instellingen.adres&&this.selectedPeriodiciteit&&
        this.selectedDag&&this.instellingen.reserverekeningnummer&&
        this.instellingen.werkrekeningnummer) return true
    else return false
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
