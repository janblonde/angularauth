import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Verbruik } from '../verbruik';
import { VerbruikItem } from '../verbruikitem';
import { VerbruikService } from '../verbruik.service';
import { KostentypesService } from '../kostentypes.service'

@Component({
  selector: 'app-verbruik-edit',
  templateUrl: './verbruik-edit.component.html',
  styleUrls: ['./verbruik-edit.component.scss']
})
export class VerbruikEditComponent implements OnInit {

  items: VerbruikItem[]=[]

  verbruik = {id: 0, fk_gebouw: 0, fk_kostentype: 0, kostentype: "", totaalverbruik:null, afgerekend: false}

  // selectedType = null
  //
  // typeSelect = []

  constructor(public verbruikService: VerbruikService,
              private route: ActivatedRoute,
              private router: Router,
              private _location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.verbruikService.getVerbruik(id)
      .subscribe(
        res=>{
          console.log(res)
          this.verbruik=res
        },
        err=>console.log(err)
      )

    this.verbruikService.getVerbruikItems(id)
      .subscribe(
        res=>{
          this.items = res
        },
        err=>console.log(err)
      )
  }

  check(){
    let totaalitems = 0;

    this.items.forEach((element)=>{
      totaalitems = totaalitems + parseFloat(element.verbruikt.toString().replace(',','.'))
    })

    if (this.verbruik.totaalverbruik === totaalitems)
      return true
    else
      return false
  }

  save(){

    this.verbruikService.updateVerbruik(this.verbruik)
      .subscribe(
        res =>{
          this.verbruikService.updateVerbruikItems(this.items)
            .subscribe(
              res => this.router.navigate(['/verbruiklist']),
              err => console.log(err)
            )
        }
      )
  }

  back(){
    this._location.back()
  }

}
