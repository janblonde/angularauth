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

  invite = false

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
    if(this.eigenaar.naam&&this.eigenaar.bankrnr&&this.eigenaar.email) return true
    else return false
  }

  saveEigenaar(eigenaar: Eigenaar){
    this.eigenaarService.saveEigenaar(eigenaar)
      .subscribe(
        res => {
          if(this.invite){
            this.eigenaarService.invite(eigenaar)
              .subscribe(
                res => console.log(res),
                err => console.log(err)
              )
          }
          this._router.navigate(['/unitlist']);
        },
        err => console.log(err)
      );
    this.eigenaar = {id: 0, naam: "", voornaam: "", email:"", bankrnr: "", bankrnr2:"", unitFK: 0};
  }

  back(){
    this._location.back()
  }

}
