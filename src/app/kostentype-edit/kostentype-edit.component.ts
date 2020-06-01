import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Verdeling } from '../verdeling';
import { KostenType } from '../kostentype';
import { KostentypesService } from '../kostentypes.service'
import { UnitService } from '../unit.service'
import { SetupService } from '../setup.service'

@Component({
  selector: 'app-kostentype-edit',
  templateUrl: './kostentype-edit.component.html',
  styleUrls: ['./kostentype-edit.component.scss']
})
export class KostentypeEditComponent implements OnInit {

  verdelingen: Verdeling[]=[]

  kostentype: KostenType={id:0,naam:"",verdeling:""}

  selectedVerdeling = null

  verdelingSelect = [{value:'algemeen',label:'op basis van algemene verdeelsleutel'},
                     {value:'aangepast',label:'aangepaste verdeelsleutel'},
                     {value:'verbruik',label:'op basis van verbruik'}]

  constructor(public kostentypesService: KostentypesService,
              public unitService: UnitService,
              public setupService: SetupService,
              private route: ActivatedRoute,
              private router: Router,
              private _location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.kostentypesService.getType(id)
      .subscribe(
        res=>{
          this.kostentype = res.rows[0]
          this.selectedVerdeling = this.kostentype.verdeling
        },
        err=>console.log(err)
      )

    this.unitService.getUnits()
      .subscribe(
        res=>{
          res.forEach((element)=>{
            this.kostentypesService.getAangepasteVerdeling(id, element.id)
              .subscribe(
                res=>{
                  let teller=0
                  if(res.rows[0]) teller = res.rows[0].teller
                  this.verdelingen.push({unit:element.naam, teller:teller, unitFK:element.id, kostentypeFK:id})
                },
                err=>console.log(err)
              )
          })
        },
        err=>console.log(err)
      )

  }

  getSelectedVerdeling(event){
    this.selectedVerdeling=event
  }

  check():boolean{
    if(this.kostentype.naam&&this.selectedVerdeling) return true
    else return false
  }

  save(){
    if(this.selectedVerdeling)
      this.kostentype.verdeling = this.selectedVerdeling


    console.log(this.kostentype.naam)
    this.kostentypesService.updateType(this.kostentype)
      .subscribe(
        res => {
          if(this.kostentype.verdeling==='aangepast'){
            this.kostentypesService.updateAangepasteVerdeling(this.verdelingen)
              .subscribe(
                res => {
                  this.setupService.update()
                  this.router.navigate(['/kostentypelist'])
                },
                err => console.log(err)
              )
            }else{
              this.setupService.update()
              this.router.navigate(['/kostentypelist'])
            }
        },
        err => console.log(err)
      )
  }

  back(){
    this._location.back()
  }

}
