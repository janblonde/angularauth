import { Component, OnInit, ViewChild } from '@angular/core';
import { FactuurService } from '../factuur.service';
import { Router } from '@angular/router';
import { PartnerService } from '../partner.service';
import { Partner } from '../partner';
import { KostentypesService } from '../kostentypes.service';

import { ModalDirective } from 'ng-uikit-pro-standard'

import { IMyOptions } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-factuur-create',
  templateUrl: './factuur-create.component.html',
  styleUrls: ['./factuur-create.component.css']
})


export class FactuurCreateComponent implements OnInit {

  factuur = {id: 0, omschrijving:"", bedrag:null, datum:"", vervaldatum:"", fk_partner: 0}

  partnersSelect = []

  selectedPartner = null;

  partner:Partner = {id: 0, naam:"", fk_type: 1, rekeningnummer:""}

  kostenTypes = [];

  selectedType = null;

  public myDatePickerOptions: IMyOptions = {
      dateFormat: 'dd/mm/yyyy'
  }

  @ViewChild('basicModal', { static: true }) basicModal: ModalDirective;

  constructor(public factuurService: FactuurService,
              public partnerService: PartnerService,
              public kostentypeService: KostentypesService,
              public router: Router) { }

  ngOnInit() {
    this.partnerService.getLeveranciers()
      .subscribe(
        res => {
          console.log(res);
          for(let element of res){
            this.partnersSelect = [...this.partnersSelect, { value: element.id, label: element.naam}]
          };
        },
        err => console.log(err)
      )

      this.kostentypeService.getTypes()
        .subscribe(
          res => {
            res.rows.forEach((element)=>{
              console.log(element)
              this.kostenTypes = [...this.kostenTypes, { value: element.id, label: element.naam}]
            });
          })
  }

  getSelectedValue(event: any) {
    this.selectedPartner = event
  }

  getSelectedType(event: any){
    this.selectedType = event;
  }

  createFactuur(){

    let factuurdatum = ""
    if(this.factuur.datum){
      let dag = this.factuur.datum.substr(0,2)
      let maand = this.factuur.datum.substr(3,2)
      let jaar = this.factuur.datum.substr(6,4)
      factuurdatum = jaar + '-' + maand + '-' + dag
    }
    this.factuur.datum = factuurdatum

    let vervaldatum = ""
    if(this.factuur.vervaldatum){
      let dag = this.factuur.vervaldatum.substr(0,2)
      let maand = this.factuur.vervaldatum.substr(3,2)
      let jaar = this.factuur.vervaldatum.substr(6,4)
      vervaldatum = jaar + '-' + maand + '-' + dag
    }
    this.factuur.vervaldatum = vervaldatum

    if(this.selectedPartner){
      this.factuur.fk_partner = this.selectedPartner;
    }

    if(this.factuur.bedrag)
      this.factuur.bedrag = parseFloat(this.factuur.bedrag.toString().replace(',','.'))
    else
      this.factuur.bedrag = 0

    this.factuurService.createFactuur(this.factuur)
      .subscribe(
        res => this.router.navigate(['/factuurlist']),
        err => console.log(err)
      )
    this.factuur = {id: 0, omschrijving:"", bedrag:null, datum: "", vervaldatum: "", fk_partner: 0}

    //TODO: kijken of we kunnen koppelen aan rekeninguittreksel (=betaald)
  }

  createPartner(partner){
    this.basicModal.hide()
    this.partner.fk_type = this.selectedType;
    this.partnerService.createPartner(partner)
      .subscribe(
        res=>{
          this.partnersSelect = [...this.partnersSelect, { value: res.rows[0].id, label: partner.naam}]
          this.selectedPartner = res.rows[0].id
        },
        err=>console.log(err)
      )

      //TODO: kijken of hiermee rekeninguittreksels kunnen gekoppeld worden met partner
  }
}
