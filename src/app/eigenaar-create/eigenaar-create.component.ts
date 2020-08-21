import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EigenaarService } from '../eigenaar.service';
import { Eigenaar } from '../eigenaar';
import { SetupService } from '../setup.service';


@Component({
  selector: 'app-eigenaar-create',
  templateUrl: './eigenaar-create.component.html',
  styleUrls: ['./eigenaar-create.component.css']
})
export class EigenaarCreateComponent implements OnInit {

  eigenaar: Eigenaar = {id: 0, naam: "",voornaam:"", email:"", bankrnr:"", bankrnr2:"", unitFK:0};

  constructor(public eigenaarService: EigenaarService,
              public setupService: SetupService,
              public _router: Router,
              public route: ActivatedRoute,
              private _location: Location) { }

  ngOnInit() {
  }

  check():boolean{
    if(this.eigenaar.naam&&this.eigenaar.bankrnr&&this.eigenaar.email) return true
    else return false
  }

  createEigenaar(){
    const id = +this.route.snapshot.paramMap.get('id');

    this.eigenaar.unitFK = id;

    this.eigenaarService.createEigenaar(this.eigenaar)
      .subscribe(
        res => {
          this.setupService.update()
          this._router.navigate(['/unitlist'])
        },
        err => console.log(err)
      )
  }

  back(){
    this._location.back()
  }

}
