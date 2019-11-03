import { Component, OnInit } from '@angular/core';
import { UittrekselService } from '../uittreksel.service';
import { EigenaarService } from '../eigenaar.service';
import { RapportenService } from '../rapporten.service';
import { Balans } from '../balans'
//import { RapportInkomsten } from '../rapport_inkomsten';

@Component({
  selector: 'app-rapporten',
  templateUrl: './rapporten.component.html',
  styleUrls: ['./rapporten.component.css']
})
export class RapportenComponent implements OnInit {

  rapportInkomsten = [];
  rapportUitgaven = [];
  rapportWerkrekening = [];
  balans: Balans;
  //map = new Map<String, String>();

  constructor(public uittrekselService: UittrekselService,
              public eigenaarService: EigenaarService,
              public rapportenService: RapportenService) {}

  ngOnInit() {

  this.rapportenService.getInkomstenRapport()
    .subscribe(
      res=>{
        this.rapportInkomsten = res;
        //console.log(this.rapportInkomsten);
      },
      err => console.log(err)
    )

  this.rapportenService.getUitgavenRapport()
    .subscribe(
      res=>{
        this.rapportUitgaven = res;
        //console.log(this.rapportUitgaven);
      },
      err => console.log(err)
    )

  this.rapportenService.getWerkrekeningRapport()
    .subscribe(
      res => {
        //console.log(res);
        this.rapportWerkrekening = res;
        //console.log(this.rapportWerkrekening);
      },
      err => console.log(err)
    )

    this.rapportenService.getBalans()
    .subscribe(
      res => {
        console.log(res);
        this.balans = res;
        //console.log(res[1]);
        //console.log(this.rapportWerkrekening);
      },
      err => console.log(err)
    )

  }

}
