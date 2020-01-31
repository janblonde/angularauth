import { Component, OnInit } from '@angular/core';
import { FactuurService } from '../factuur.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Factuur } from '../factuur';

@Component({
  selector: 'app-factuur-detail',
  templateUrl: './factuur-detail.component.html',
  styleUrls: ['./factuur-detail.component.scss']
})
export class FactuurDetailComponent implements OnInit {

  factuur: Factuur;

  constructor(public factuurService: FactuurService,
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

          //this.factuur.vervaldatum = dagStr + '/' + maandStr + '/' + dt.getFullYear().toString()

          dt = new Date(this.factuur.datum)
          dag = dt.getDate()
          if (dag<10) dagStr = '0' + dag.toString()
          maand = dt.getMonth()+1
          if(maand<10) maandStr = '0' + maand.toString()

          //this.factuur.datum = dagStr + '/' + maandStr + '/' + dt.getFullYear()

        },
        err => console.log(err)
      )
  }

}
