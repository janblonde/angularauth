import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Uittreksel } from '../uittreksel';
import { UittrekselService } from '../uittreksel.service';

@Component({
  selector: 'app-rekening-detail',
  templateUrl: './rekening-detail.component.html',
  styleUrls: ['./rekening-detail.component.scss']
})
export class RekeningDetailComponent implements OnInit {

  uittreksel: Uittreksel;

  selectedType = null;

  constructor(public uittrekselService: UittrekselService,
              private route: ActivatedRoute,
              public router: Router,
              public _location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.uittrekselService.getUittreksel(id)
      .subscribe(
        res => {
          console.log(res[0])
          this.uittreksel = res[0]
          this.selectedType = res[0].type
        },
        err => console.log(err)
      )
  }

  back(){
    this._location.back()
  }
}
