import { Component, OnInit } from '@angular/core';
import { FactuurService } from '../factuur.service';
import { Router } from '@angular/router';
import { PartnerService } from '../partner.service';

@Component({
  selector: 'app-factuur-create',
  templateUrl: './factuur-create.component.html',
  styleUrls: ['./factuur-create.component.css']
})
export class FactuurCreateComponent implements OnInit {

  factuur = {id: 0, omschrijving:"", bedrag:0, fk_partner: 0}

  partners = []

  selectedFactuur = null;

  constructor(public factuurService: FactuurService,
              public partnerService: PartnerService,
              public router: Router) { }

  ngOnInit() {
    this.partnerService.getLeveranciers()
      .subscribe(
        res => this.partners = res,
        err => console.log(err)
      )
  }

  createFactuur(){

    if(this.selectedFactuur){
      this.factuur.fk_partner = this.selectedFactuur;
    }

    this.factuurService.createFactuur(this.factuur)
      .subscribe(
        res => this.router.navigate(['/factuurlist']),
        err => console.log(err)
      )
    this.factuur = {id: 0, omschrijving:"", bedrag:0, fk_partner: 0}
  }

}
