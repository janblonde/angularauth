import { Component, OnInit } from '@angular/core';
import { Uittreksel } from '../uittreksel';
import { UittrekselService } from '../uittreksel.service'
import { KostentypesService } from '../kostentypes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rekening-edit',
  templateUrl: './rekening-edit.component.html',
  styleUrls: ['./rekening-edit.component.scss']
})
export class RekeningEditComponent implements OnInit {

  uittreksel: Uittreksel;

  kostenTypes = [];

  selectedType = null;

  constructor(public uittrekselService: UittrekselService,
              public kostentypeService: KostentypesService,
              private route: ActivatedRoute,
              public router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.uittrekselService.getUittreksel(id)
      .subscribe(
        res => {
          this.uittreksel = res[0]
          this.selectedType = res[0].type
        },
        err => console.log(err)
      )

      this.kostentypeService.getTypes()
        .subscribe(
          res => {
            res.rows.forEach((element)=>{
              this.kostenTypes = [...this.kostenTypes, { value: element.id, label: element.naam}]
            });
          })
  }

  getSelectedType(event: any){
    this.selectedType = event;
  }

  saveUittreksel(){

    if(this.selectedType)
      this.uittreksel.type = this.selectedType

    this.uittrekselService.editUittreksel(this.uittreksel)
      .subscribe(
        res => this.router.navigate(['/rekeninglist']),
        err => console.log(err)
      )
  }
}
