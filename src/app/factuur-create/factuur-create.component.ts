import { Component, OnInit } from '@angular/core';
import { FactuurService } from '../factuur.service';
import { Router } from '@angular/router';
import { PartnerService } from '../partner.service';
import { Partner } from '../partner';
import { KostentypesService } from '../kostentypes.service';

@Component({
  selector: 'app-factuur-create',
  templateUrl: './factuur-create.component.html',
  styleUrls: ['./factuur-create.component.css']
})
export class FactuurCreateComponent implements OnInit {

  factuur = {id: 0, omschrijving:"", bedrag:0, fk_partner: 0}

  partners = []

  selectedPartner = null;

  partner:Partner = {id: 0, naam:"", fk_type: 1, rekeningnummer:""}

  kostenTypes = [];

  selectedType = null;

  constructor(public factuurService: FactuurService,
              public partnerService: PartnerService,
              public kostentypeService: KostentypesService,
              public router: Router) { }

  ngOnInit() {
    this.partnerService.getLeveranciers()
      .subscribe(
        res => this.partners = res,
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

  createFactuur(){

    if(this.selectedPartner){
      this.factuur.fk_partner = this.selectedPartner;
    }

    this.factuurService.createFactuur(this.factuur)
      .subscribe(
        res => this.router.navigate(['/factuurlist']),
        err => console.log(err)
      )
    this.factuur = {id: 0, omschrijving:"", bedrag:0, fk_partner: 0}

    //TODO: kijken of we kunnen koppelen aan rekeninguittreksel (=betaald)
  }

  createPartner(partner){
    console.log(partner);
    this.partner.fk_type = this.selectedType;
    this.partnerService.createPartner(partner)
      .subscribe(
        res=>{
          console.log(res.rows[0].id)
          this.partners.push({id: res.rows[0].id,naam: partner.naam})
          this.selectedPartner = res.rows[0].id

        },
        err=>console.log(err)
      )

      //TODO: kijken of hiermee rekeninguittreksels kunnen gekoppeld worden met partner
  }

}
