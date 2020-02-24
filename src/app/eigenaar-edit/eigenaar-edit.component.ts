import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EigenaarService } from '../eigenaar.service';
import { Eigenaar } from '../eigenaar';
import { InstellingenService } from '../instellingen.service';
import { Instellingen } from '../instellingen';

@Component({
  selector: 'app-eigenaar-edit',
  templateUrl: './eigenaar-edit.component.html',
  styleUrls: ['./eigenaar-edit.component.css']
})
export class EigenaarEditComponent implements OnInit {

  eigenaar: Eigenaar;

  instellingen: Instellingen;

  constructor(public eigenaarService: EigenaarService,
              public instellingenService: InstellingenService,
              public _router: Router,
              private route: ActivatedRoute,
              private _location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.eigenaarService.getEigenaar(id)
      .subscribe(
        res => this.eigenaar = res,
        err => console.log(err)
      )

    this.instellingenService.getInstellingen()
      .subscribe(
        res => this.instellingen = res[0]
      )
  }

  check():boolean{
    if(this.eigenaar.naam&&this.eigenaar.bankrnr) return true
    else return false
  }

  saveEigenaar(eigenaar: Eigenaar){
    if(eigenaar.overgenomen_werkrekening)
      eigenaar.overgenomen_werkrekening = parseFloat(eigenaar.overgenomen_werkrekening.toString().replace(',','.'))
    else
      eigenaar.overgenomen_werkrekening = 0

    if(eigenaar.overgenomen_reserverekening)
      eigenaar.overgenomen_reserverekening = parseFloat(eigenaar.overgenomen_reserverekening.toString().replace(',','.'))
    else
      eigenaar.overgenomen_reserverekening = 0

    this.eigenaarService.saveEigenaar(eigenaar)
      .subscribe(
        res => {
          console.log(res);
          this._router.navigate(['/unitlist']);
        },
        err => console.log(err)
      );
    this.eigenaar = {id: 0, naam: "", voornaam: "", email:"",
                      overgenomen_werkrekening: 0, overgenomen_reserverekening: 0, bankrnr: "", unitFK: 0};
  }

  back(){
    this._location.back()
  }

}
