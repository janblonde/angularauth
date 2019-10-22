import { Component, OnInit } from '@angular/core';
import { Uittreksel } from '../uittreksel';
import { UittrekselService } from '../uittreksel.service';

@Component({
  selector: 'app-rekening-ongekoppeld',
  templateUrl: './rekening-ongekoppeld.component.html',
  styleUrls: ['./rekening-ongekoppeld.component.css']
})
export class RekeningOngekoppeldComponent implements OnInit {

  uittreksels: Uittreksel[];

  constructor(public uittrekselService: UittrekselService) { }

  ngOnInit() {
    this.uittrekselService.getOngekoppeldeUittreksels()
      .subscribe(
        res => {console.log(res); this.uittreksels = res},
        err => console.log(err)
      )
  }

}
