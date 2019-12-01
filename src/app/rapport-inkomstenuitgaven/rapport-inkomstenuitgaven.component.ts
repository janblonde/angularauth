import { Component, OnInit } from '@angular/core';
import { RapportenService } from '../rapporten.service';

@Component({
  selector: 'app-rapport-inkomstenuitgaven',
  templateUrl: './rapport-inkomstenuitgaven.component.html',
  styleUrls: ['./rapport-inkomstenuitgaven.component.scss']
})
export class RapportInkomstenuitgavenComponent implements OnInit {

  rapportInkomsten = [];
  rapportUitgaven = [];

  constructor(public rapportenService: RapportenService) { }

  ngOnInit() {

    this.rapportenService.getInkomstenRapport()
      .subscribe(
        res=>{
          this.rapportInkomsten = res;
        },
        err => console.log(err)
      )

    this.rapportenService.getUitgavenRapport()
      .subscribe(
        res=>{
          this.rapportUitgaven = res;
        },
        err => console.log(err)
      )
  }

}
