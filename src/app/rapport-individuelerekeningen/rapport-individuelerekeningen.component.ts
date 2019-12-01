import { Component, OnInit } from '@angular/core';
import { RapportenService } from '../rapporten.service';

@Component({
  selector: 'app-rapport-individuelerekeningen',
  templateUrl: './rapport-individuelerekeningen.component.html',
  styleUrls: ['./rapport-individuelerekeningen.component.scss']
})
export class RapportIndividuelerekeningenComponent implements OnInit {

  rapportWerkrekening = [];

  constructor(public rapportenService:RapportenService) { }

  ngOnInit() {
    this.rapportenService.getWerkrekeningRapport()
      .subscribe(
        res => {
          this.rapportWerkrekening = res;
        },
        err => console.log(err)
      )
  }

}
