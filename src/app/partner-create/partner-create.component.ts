import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../partner.service';
import { UittrekselService } from '../uittreksel.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Partner } from '../partner';

@Component({
  selector: 'app-partner-create',
  templateUrl: './partner-create.component.html',
  styleUrls: ['./partner-create.component.css']
})
export class PartnerCreateComponent implements OnInit {

  partner: Partner = {id: 0, naam: "", type:"", rekeningnummer: ""}

  constructor(public partnerService: PartnerService,
              public uittrekselService: UittrekselService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.uittrekselService.getUittreksel(id)
      .subscribe(
        res => {
          if(res[0].tegenrekening){
            this.partner.rekeningnummer = res[0].tegenrekening;
          }},
        err => console.log(err)
      )
  }

  createPartner(){

    this.partnerService.createPartner(this.partner)
      .subscribe(
        res => {
          console.log(this.partner);
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
