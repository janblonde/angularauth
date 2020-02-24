import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../partner.service';
import { UittrekselService } from '../uittreksel.service';
import { KostentypesService } from '../kostentypes.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Partner } from '../partner';
import { KostenType } from '../kostentype';

@Component({
  selector: 'app-partner-create',
  templateUrl: './partner-create.component.html',
  styleUrls: ['./partner-create.component.css']
})
export class PartnerCreateComponent implements OnInit {

  partner: Partner = {id: 0, naam: "", fk_type:0, rekeningnummer: ""}

  selectedType = null;

  kostenTypes = [];

  constructor(public partnerService: PartnerService,
              public uittrekselService: UittrekselService,
              public kostentypeService: KostentypesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.uittrekselService.getUittreksel(id)
      .subscribe(
        res => {
          if(res[0].tegenrekening) this.partner.rekeningnummer = res[0].tegenrekening;
          this.kostentypeService.getTypes()
            .subscribe(
              res => {
                res.rows.forEach((element)=>{
                  this.kostenTypes = [...this.kostenTypes, { value: element.id, label: element.naam}]
                })
              },
              err => console.log(err)
            )
        },
        err => console.log(err)
      )
  }

  getSelectedType(event: any){
    this.selectedType = event;
  }

  createPartner(){

    if(this.selectedType){
      this.partner.fk_type=this.selectedType
    }

    this.partnerService.createPartner(this.partner)
      .subscribe(
        res => {
          this.partner.id = res.rows[0].id
          this.uittrekselService.koppelUittreksels(this.partner)
            .subscribe(
              res => this.router.navigate(['/ongekoppeld']),
              err => console.log(err)
            )
        },
        err => console.log(err)
      )
  }
}
