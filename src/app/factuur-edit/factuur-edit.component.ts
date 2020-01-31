import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FactuurService } from '../factuur.service';
import { Factuur } from '../factuur';
import { PartnerService } from '../partner.service';
import { Partner } from '../partner';


@Component({
  selector: 'app-factuur-edit',
  templateUrl: './factuur-edit.component.html',
  styleUrls: ['./factuur-edit.component.scss']
})
export class FactuurEditComponent implements OnInit {

  factuur: Factuur

  partnersSelect = []

  selectedPartner = null;

  constructor(public factuurService: FactuurService,
              public partnerService: PartnerService,
              public _router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.factuurService.getFactuur(id)
      .subscribe(
        res => {
          this.factuur = res[0]

          var dt = new Date(this.factuur.vervaldatum)
          let dag:number = dt.getDate()
          let dagStr:string = dag.toString()
          if (dag<10) dagStr = '0' + dag.toString()
          let maand:number = dt.getMonth()+1
          let maandStr:string = maand.toString();
          if(maand<10) maandStr = '0' + maand.toString()

          this.factuur.vervaldatum = new Date(dagStr + '/' + maandStr + '/' + dt.getFullYear().toString())

          dt = new Date(this.factuur.datum)
          dag = dt.getDate()
          if (dag<10) dagStr = '0' + dag.toString()
          maand = dt.getMonth()+1
          if(maand<10) maandStr = '0' + maand.toString()

          this.factuur.datum = new Date(dagStr + '/' + maandStr + '/' + dt.getFullYear())

          console.log(this.factuur)

          this.selectedPartner = this.factuur.fk_partner

        },
        err => console.log(err)
      )

    this.partnerService.getLeveranciers()
      .subscribe(
        res => {
          for(let element of res){
            this.partnersSelect = [...this.partnersSelect, { value: element.id, label: element.naam}]
          };
        },
        err => console.log(err)
      )
  }

  getSelectedValue(event: any){
    this.selectedPartner = event
  }

  saveFactuur(factuur: Factuur){
    if(this.selectedPartner){
      factuur.fk_partner = this.selectedPartner;
    }

    this.factuurService.saveFactuur(factuur)
      .subscribe(
        res => this._router.navigate(['/factuurlist']),
        err => console.log(err)
      )
  }

}
