import { Component, OnInit } from '@angular/core';
import { RapportenService } from '../rapporten.service';
import { Balans } from '../balans'

@Component({
  selector: 'app-rapport-balans',
  templateUrl: './rapport-balans.component.html',
  styleUrls: ['./rapport-balans.component.scss']
})
export class RapportBalansComponent implements OnInit {

  balans: Balans;

  constructor(public rapportenService:RapportenService) { }

  ngOnInit() {
    this.rapportenService.getBalans()
    .subscribe(
      res => {
        console.log(res);
        this.balans = res;
      },
      err => console.log(err)
    )
  }
}
