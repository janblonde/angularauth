import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { IMyOptions } from 'ng-uikit-pro-standard';

import { AfrekeningService } from '../afrekening.service';
import { Afrekening } from '../afrekening';

@Component({
  selector: 'app-afrekening-create',
  templateUrl: './afrekening-create.component.html',
  styleUrls: ['./afrekening-create.component.scss']
})
export class AfrekeningCreateComponent implements OnInit {

  afrekening = {id: 0, van:"", tot:""}

  items = []

  state="initial"

  public myDatePickerOptions: IMyOptions = {
      dateFormat: 'dd/mm/yyyy'
  }

  constructor(public afrekeningService: AfrekeningService) { }

  ngOnInit() {
  }

  check(){
    if(this.afrekening.van!="" && this.afrekening.tot!="")
      return true
    else
      return false
  }

  preview(){
    let van = ""
    if(this.afrekening.van){
      let dag = this.afrekening.van.substr(0,2)
      let maand = this.afrekening.van.substr(3,2)
      let jaar = this.afrekening.van.substr(6,4)
      van = jaar + '-' + maand + '-' + dag
    }
    //this.afrekening.van = van

    let tot = ""
    if(this.afrekening.tot){
      let dag = this.afrekening.tot.substr(0,2)
      let maand = this.afrekening.tot.substr(3,2)
      let jaar = this.afrekening.tot.substr(6,4)
      tot = jaar + '-' + maand + '-' + dag
    }
    //this.afrekening.tot = tot

    this.afrekeningService.getPreview(van, tot)
      .subscribe(
        res=>{
          this.items=res
          this.state="validate"
        },
        err=>console.log(err)
      )
  }

  validate(){
    let van = ""
    if(this.afrekening.van){
      let dag = this.afrekening.van.substr(0,2)
      let maand = this.afrekening.van.substr(3,2)
      let jaar = this.afrekening.van.substr(6,4)
      van = jaar + '-' + maand + '-' + dag
    }
    //this.afrekening.van = van

    let tot = ""
    if(this.afrekening.tot){
      let dag = this.afrekening.tot.substr(0,2)
      let maand = this.afrekening.tot.substr(3,2)
      let jaar = this.afrekening.tot.substr(6,4)
      tot = jaar + '-' + maand + '-' + dag
    }

    this.afrekeningService.validate(this.items, van, tot)
      .subscribe(
        res=>{
          this.state="validated"
        },
        err=>console.log(err)
      )
  }

}
