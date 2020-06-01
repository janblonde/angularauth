import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { KostentypesService } from '../kostentypes.service';
import { KostenType } from '../kostentype';
import { UnitService } from '../unit.service';
import { Verdeling } from '../verdeling'

@Component({
  selector: 'app-kostentype-create',
  templateUrl: './kostentype-create.component.html',
  styleUrls: ['./kostentype-create.component.scss']
})
export class KostentypeCreateComponent implements OnInit {

  kostentype: KostenType ={id:0,naam:"",verdeling:""}

  verdelingen: Verdeling[] = []

  selectedVerdeling = null;

  verdelingSelect = [{value:'algemeen',label:'op basis van algemene verdeelsleutel'},
                     {value:'aangepast',label:'aangepaste verdeelsleutel'},
                     {value:'verbruik',label:'op basis van verbruik'}]

  constructor(public kostentypesService: KostentypesService,
              public unitService: UnitService,
              public router: Router,
              private _location: Location) { }

  ngOnInit() {
    this.unitService.getUnits()
      .subscribe(
        res=>{
          res.forEach((element)=>{
            this.verdelingen.push({unit:element.naam, teller:element.duizendste, unitFK:element.id, kostentypeFK:0})
          })
          console.log(this.verdelingen)
        },
        err=>console.log(err)
      )

    //this.verdelingen = [{unit:'1A',teller:500},{unit:'1B',teller:500}]
  }

  check():boolean{
    if(this.kostentype.naam&&this.selectedVerdeling) return true
    else return false
  }

  getSelectedVerdeling(event: any){
    this.selectedVerdeling = event;
  }

  createKostentype(){

    if(this.selectedVerdeling){
      this.kostentype.verdeling = this.selectedVerdeling
    }

    this.kostentypesService.createType(this.kostentype)
      .subscribe(
        res => {
          console.log(res.rows[0].id)
          this.verdelingen.forEach((element)=>{
            element.kostentypeFK = res.rows[0].id
          })
          this.kostentypesService.createAangepasteVerdeling(this.verdelingen)
            .subscribe(
              res=>this.router.navigate(['/kostentypelist']),
              err=>console.log(err)
            )
        },
        err => console.log(err)
      )
  }

  back(){
    this._location.back()
  }

}
