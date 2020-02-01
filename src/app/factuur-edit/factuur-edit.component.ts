import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FactuurService } from '../factuur.service';
import { Factuur } from '../factuur';
import { PartnerService } from '../partner.service';
import { Partner } from '../partner';

import { IMyOptions } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-factuur-edit',
  templateUrl: './factuur-edit.component.html',
  styleUrls: ['./factuur-edit.component.scss']
})
export class FactuurEditComponent implements OnInit {

  factuur: Factuur

  partnersSelect = []

  selectedPartner = null;

  public myDatePickerOptions: IMyOptions = {
      dateFormat: 'dd/mm/yyyy'
  }

  constructor(public factuurService: FactuurService,
              public partnerService: PartnerService,
              public _router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.factuurService.getFactuur(id)
      .subscribe(
        res => {
          this.factuur = res[0]

          let vervaldatum = ""
          if(this.factuur.vervaldatum){
            let dag = this.factuur.vervaldatum.substr(8,2)
            let maand = this.factuur.vervaldatum.substr(5,2)
            let jaar = this.factuur.vervaldatum.substr(0,4)
            vervaldatum = dag + "/" + maand + "/" + jaar
          }
          this.factuur.vervaldatum = vervaldatum

          let factuurdatum = ""
          if(this.factuur.datum){
            let dag = this.factuur.datum.substr(8,2)
            let maand = this.factuur.datum.substr(5,2)
            let jaar = this.factuur.datum.substr(0,4)
            factuurdatum = dag + "/" + maand + "/" + jaar
          }
          this.factuur.datum = factuurdatum

          this.selectedPartner = this.factuur.fk_partner

        },
        err => console.log(err)
      )

    this.partnerService.getLeveranciers()
      .subscribe(
        res => {
          for(let element of res){
            this.partnersSelect = [...this.partnersSelect, { value: element.id, label: element.naam}]
          };
        },
        err => console.log(err)
      )
  }

  getSelectedValue(event: any){
    this.selectedPartner = event
  }

  saveFactuur(factuur: Factuur){

    if(this.selectedPartner){
      factuur.fk_partner = this.selectedPartner;
    }

    let factuurdatum = ""
    if(factuur.datum){
      let dag = factuur.datum.substr(0,2)
      let maand = factuur.datum.substr(3,2)
      let jaar = factuur.datum.substr(6,4)
      factuurdatum = jaar + '-' + maand + '-' + dag
    }
    factuur.datum = factuurdatum

    let vervaldatum = ""
    if(factuur.vervaldatum){
      let dag = factuur.vervaldatum.substr(0,2)
      let maand = factuur.vervaldatum.substr(3,2)
      let jaar = factuur.vervaldatum.substr(6,4)
      vervaldatum = jaar + '-' + maand + '-' + dag
    }
    factuur.vervaldatum = vervaldatum

    this.factuurService.saveFactuur(factuur)
      .subscribe(
        res => this._router.navigate(['/factuurlist']),
        err => console.log(err)
      )
  }

}
