import { Component, OnInit, ViewChild } from '@angular/core';
import { FactuurService } from '../factuur.service';
import { Router } from '@angular/router';
import { PartnerService } from '../partner.service';
import { Partner } from '../partner';
import { KostentypesService } from '../kostentypes.service';

import { ModalDirective } from 'ng-uikit-pro-standard'

@Component({
  selector: 'app-factuur-create',
  templateUrl: './factuur-create.component.html',
  styleUrls: ['./factuur-create.component.css']
})
export class FactuurCreateComponent implements OnInit {

  factuur = {id: 0, omschrijving:"", bedrag:null, fk_partner: 0}

  partnersSelect = []

  selectedPartner = null;

  partner:Partner = {id: 0, naam:"", fk_type: 1, rekeningnummer:""}

  kostenTypes = [];

  selectedType = null;

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
            this.kostenTypes.push(element);
          })
        })
  }

  getSelectedValue(event: any) {
    this.selectedPartner = event
  }

  createFactuur(){
    if(this.selectedPartner){
      this.factuur.fk_partner = this.selectedPartner;
    }

    this.factuurService.createFactuur(this.factuur)
      .subscribe(
        res => this.router.navigate(['/factuurlist']),
        err => console.log(err)
      )
    this.factuur = {id: 0, omschrijving:"", bedrag:null, fk_partner: 0}

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
