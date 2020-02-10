import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EigenaarService } from '../eigenaar.service';
import { Eigenaar } from '../eigenaar';
import { InstellingenService } from '../instellingen.service';
import { Instellingen } from '../instellingen';


@Component({
  selector: 'app-eigenaar-create',
  templateUrl: './eigenaar-create.component.html',
  styleUrls: ['./eigenaar-create.component.css']
})
export class EigenaarCreateComponent implements OnInit {

  eigenaar: Eigenaar = {id: 0, naam: "",voornaam:"", email:"", bankrnr:"",
                        overgenomen_werkrekening: 0, overgenomen_reserverekening: 0, unitFK:0};

  instellingen: Instellingen;

  constructor(public eigenaarService: EigenaarService,
              public instellingenService: InstellingenService,
              public _router: Router,
              public route: ActivatedRoute) { }

  ngOnInit() {

    this.instellingenService.getInstellingen()
      .subscribe(
        res => this.instellingen = res[0]
      )
  }

  createEigenaar(){
    const id = +this.route.snapshot.paramMap.get('id');

    this.eigenaar.unitFK = id;

    if(this.eigenaar.overgenomen_werkrekening)
      this.eigenaar.overgenomen_werkrekening = parseFloat(this.eigenaar.overgenomen_werkrekening.toString().replace(',','.'))
    else
      this.eigenaar.overgenomen_werkrekening = 0;

    if(this.eigenaar.overgenomen_reserverekening)
      this.eigenaar.overgenomen_reserverekening = parseFloat(this.eigenaar.overgenomen_reserverekening.toString().replace(',','.'))
    else
      this.eigenaar.overgenomen_reserverekening = 0;

    this.eigenaarService.createEigenaar(this.eigenaar)
      .subscribe(
        res => this._router.navigate(['/unitlist']),
        err => console.log(err)
      )
  }

}
